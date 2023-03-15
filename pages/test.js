import React, { useRef } from 'react'


const test = () => {

    const dragItem = useRef();
    const container = useRef();

    // var dragItem = document.querySelector("#item");
    // var container = document.querySelector("#container");
 
    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;
 
    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);
 
    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);
 
    function dragStart(e) {
       if (e.type === "touchstart") {
          initialX = e.touches[0].clientX - xOffset;
          initialY = e.touches[0].clientY - yOffset;
       } else {
          initialX = e.clientX - xOffset;
          initialY = e.clientY - yOffset;
       }
 
       if (e.target === dragItem) {
          active = true;
       }
    }
 
    function dragEnd(e) {
       initialX = currentX;
       initialY = currentY;
 
       active = false;
    }
 
    function drag(e) {
       if (active) {
 
          e.preventDefault();
 
          if (e.type === "touchmove") {
             currentX = e.touches[0].clientX - initialX;
             currentY = e.touches[0].clientY - initialY;
          } else {
             currentX = e.clientX - initialX;
             currentY = e.clientY - initialY;
          }
 
          xOffset = currentX;
          yOffset = currentY;
 
          setTranslate(currentX, currentY, dragItem);
       }
    }
 
    function setTranslate(xPos, yPos, el) {
       el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
  return (
    <>
        <p>test</p>
        <div id="outerContainer" 
            style={{
                width: "100%",
                height: "400px",
                backgroundColor: "#333",
                display: "flex",
                alignItems: "center",
                justifyContent:"center",
                overflow: "hidden",
                borderRadius: "7px",
                touchAction: "none",
                marginBottom:"130px"
            }}
        >
            <div ref={container}>
                <div ref={dragItem}>
                    fdffdf
                </div>
            </div>
        </div>
    </>

  )
}

export default test