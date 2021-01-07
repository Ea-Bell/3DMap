<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <title>Example 08.06 - Load OBJ model </title>
    <script type="text/javascript" src="/Frontend/script/libs/three.js"></script>
    <script type="text/javascript" src="/Frontend/script/libs/OBJLoader.js"></script>


    <script type="text/javascript" src="/Frontend/script/libs/stats.js"></script>
    <script type="text/javascript" src="/Frontend/script/libs/dat.gui.js"></script>
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
 <div id="Stats-output" hidden="true">
</div> 
<!-- Div which will hold the Output -->
<div id="WebGL-output">
</div>

<!-- Javascript code that runs our Three.js examples -->
<script type="text/javascript">

    // once everything is loaded, we run our Three.js stuff.
    function init() {

        var stats = initStats();

        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // create a render and set the size
        var webGLRenderer = new THREE.WebGLRenderer();
        webGLRenderer.setClearColor(new THREE.Color(0xffffff, 1.0));
        webGLRenderer.setSize(window.innerWidth, window.innerHeight);
        webGLRenderer.shadowMapEnabled = true;

        // position and point the camera to the center of the scene
        camera.position.x = 0;
        camera.position.y = 44.452;
        camera.position.z = -184.184;
        camera.rotation.x=-90;
        camera.lookAt(scene.position);
        scene.add(camera);

        // add spotlight for the shadows
        var spotLight = new THREE.DirectionalLight(0xffffff);
        spotLight.position.set(10, 10, 10);
        spotLight.intensity = 1;
        scene.add(spotLight);

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

        // call the render function
        var step = 0;


        // setup the control gui
        var controls = new function () {
            // we need the first child, since it's a multimaterial

        };

        var mesh;
		var pineconeobj='/Frontend/script/libs/assets/models/pinecone.obj';
		var carobj='/Frontend/3DObj/carmodeltest.obj';
        var loader = new THREE.OBJLoader();
        loader.load(carobj, function (loadedMesh) {
            var material = new THREE.MeshLambertMaterial({color: 0x5C3A21});

            // loadedMesh is a group of meshes. For
            // each mesh set the material, and compute the information
            // three.js needs for rendering.
            loadedMesh.children.forEach(function (child) {
                child.material = material;
                child.geometry.computeFaceNormals();
                child.geometry.computeVertexNormals();
            });

            mesh = loadedMesh;
            loadedMesh.scale.set(0.5, 0.5, 0.5);

            loadedMesh.rotation.x =0;
            scene.add(loadedMesh);
        });

        render()


       function render() {
            stats.update();

           if (mesh) {
                mesh.rotation.y += 0;
                mesh.rotation.x += 0;
//                mesh.rotation.y+=0.006;
            } 


            // render using requestAnimationFrame
             requestAnimationFrame(render); 
            webGLRenderer.render(scene, camera);
        } 

        function initStats() {

            var stats = new Stats();
            stats.setMode(0); // 0: fps, 1: ms

            // Align top-left
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';

            document.getElementById("Stats-output").appendChild(stats.domElement);

            return stats;
        } 
    }
    
    window.onload = init;
</script>
</body>
</html>
