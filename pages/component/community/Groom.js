import React from 'react';
import Image from 'next/image';

const Groom = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
      style={{ margin: '50px 0px 50px 0px'}} 
       src="/img/common/bbbbbb.png" width={325} height={325} alt='' ></Image>
    </div>
  );
}

export default Groom;