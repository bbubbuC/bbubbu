import React from 'react'
import { fabric } from 'fabric';


const Fabric = () => {


  return (
    <>
      <button onclick="toggleMode(modes.pan)">배경 조절하기</button>
      <button onclick="toggleMode(modes.drawing)">그리기</button>
      <input id="colorPicker" value="#000" data-jscolor=""/>
      <button onclick="clearCanvas(canvas)">캔버스 지우기</button>

      <canvas id="canvas"></canvas>

      <button onclick="createRect(canvas)">사닫형</button>
      <button onclick="createCirc(canvas)">원</button> 
      <button onclick="groupObjects(canvas, group, true)">그룹</button>
      <button onclick="groupObjects(canvas, group, false)">그룹 풀기</button>

      <input id="myImg" type="file" accept="image/*"/>
      <button id="add-image-button">Add Image</button>
      <input type="text" id="text-input"/>
      <button id="add-text">Add Text</button>
      
      <button id="copy">이미지로 만들기</button>
      <a id="downloadBtn" href="" download="my_painting.png">다운로드</a>
    </>
  )
}

export default Fabric