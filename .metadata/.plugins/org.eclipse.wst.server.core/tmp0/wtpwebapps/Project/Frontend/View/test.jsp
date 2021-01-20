<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <title>Example 08.06 - Load OBJ model </title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
    <script type="text/javascript" src="/Frontend/script/libs/three.js"></script>
    <script type="text/javascript" src="/Frontend/script/libs/OBJLoader.js"></script>
    <script type="text/javascript" src="/Frontend/script/libs/stats.js"></script>
    <script type="text/javascript" src="/Frontend/script/libs/dat.gui.js"></script>
  
    
    <script type="text/javascript" src="/Frontend/script/3dObjetLoader.js"></script>
    <style>
        body {
            /* set margin to 0 and overflow to hidden, to go fullscreen */
            margin: 0;
            overflow: hidden;
        }
    </style>
</head>
<body>

<!-- Stats-output hidden=true로 둘것 
	사유: 없애면 화면이 로더가 안돼서 에러가 난다.
 -->
 <input onload="Object3dLoader()" hidden="true">
 <div id="Stats-output" hidden="true" >
</div> 
<!-- Div which will hold the Output -->
<div id="WebGL-output">
</div>
</body>
</html>