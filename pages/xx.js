import { useState } from 'react';


const xx = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        cursor: 'point',
      }}
      onMouseDown={(e) => {
        const startX = e.pageX - position.x;
        const startY = e.pageY - position.y;

        const handleMouseMove = (e) => {
          const newX = e.pageX - startX;
          const newY = e.pageY - startY;
          setPosition({ x: newX, y: newY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', handleMouseMove);
        });
      }}
    />
  );

}

export default xx

