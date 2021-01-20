/**
 *  변동이 가능한건 최대한 밖으로 빼야한다.
 */
 var Start= function () {
	
	var objectURL='/Frontend/3DObj/carmodeltest.obj';	
	
	var camera={
		postion:[0,90,0]  //postion:[x,y,z]
		,	
		rotation:[-90,0,0]//rotation[x,y,z]
	};
	
	var loadedMesh={
			postion:[0,90,0]  //postion:[x,y,z]
			,	
			rotation:[-90,0,0]//rotation[x,y,z]
		};
	var loadedMesh={
			postion:[0,0,0]
	,
		rotation:[0,0,0]
	};
	var aspect =window.innerWidth/window.innerHeight;
	
	
	//요기서 조립합시다.
	
	
	const Object3dLoaders= new Object3dLoaderClass(objectURL,aspect);
		Object3dLoaders.initStats();
		debugger;
		Object3dLoaders.SetWebGlRenderer();
		Object3dLoaders.SetCamera(camera, aspect);
	var Mesh=Object3dLoader.SetLoadedMesh(loadedMesh);
		Object3dLoader.Loader(Mesh);
		Object3dLoaders.render()
}

 
	let scene;
	var Camera;
	let webGLRenderer;
	let ObjectURL;
	let loader;
 
class Object3dLoaderClass {
	
	
	constructor(objectURL,aspect) {
		 scene = new THREE.Scene();
		 webGLRenderer = new THREE.WebGLRenderer();
		 Camera = new Three.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1 , 1000);
		 ObjectURL=objectURL;
		 loader= new THREE.OBJLoader();		
		 
	}
	
	initStats(){
		var stats= new Stats();
		stats.setMode(0);
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.left='0px';
		stats.domElement.style.top='0px';
		//document.getElementById('Stats-output').appendChild(stats.domElement);
		document.getElementById('Stats-output')
		return stats;
	}
	
	SetWebGlRenderer(){
		
		console.log(webGLRenderer);
		webGLRenderer.setClearColor(new THREE.Color(0xffffff, 1.0));
		webGLRenderer.setSize(window.innerWidth, window.innerHeight);
		webGLRenderer.shadowMapEnabled=true;
	}
	SetCamera(camera, aspect){	
		Camera.postion.x=camera.postion[0];
		Camera.postion.y=camera.postion[1];
		Camera.postion.z=camera.postion[2];
		
		Camera.rotation.x=camera.rotation[0];
		Camera.rotation.y=camera.rotation[1];
		Camera.rotation.z=camera.rotation[2];
        Camera.lookAt(scene.position);
        scene.add(camera);
	}
	SetLoadedMesh(LoadedMesh){
		   loadedMesh.position.x=0;
           loadedMesh.position.y=0;
           loadedMesh.position.z=0;
           
           loadedMesh.rotation.x =0;
           loadedMesh.rotation.y =(90+0)*(Math.PI/180); //요기에 변환하는 리턴 함수를 만들어서 각도를 변한 할 수 있게 만드시오.
           console.log(loadedMesh.rotation.y);
           loadedMesh.rotation.z =0;
           
           return LoadedMesh;
	}
	
	Loader(Mesh){
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

            Mesh = loadedMesh;
            loadedMesh.scale.set(1, 1, 1);
            
            loadedMesh.position.x=0;
            loadedMesh.position.y=0;
            loadedMesh.position.z=0;
            
            loadedMesh.rotation.x =0;
            loadedMesh.rotation.y =(90+0)*(Math.PI/180); //요기에 변환하는 리턴 함수를 만들어서 각도를 변한 할 수 있게 만드시오.
            console.log(loadedMesh.rotation.y);
            loadedMesh.rotation.z =0;
            scene.add(loadedMesh);
        });
	}
	 render() {
		 stats.update();
         if (mesh) {
              mesh.rotation.y += 0;
              mesh.rotation.x += 0;
//            mesh.rotation.y+=0.006;
          } 
          // render using requestAnimationFrame
           requestAnimationFrame(render); 
          webGLRenderer.render(scene, camera);
	}
}

Start();



// 고민1 데이터들을 관리하기 위해서 데이터들과 함수들을 구분해서 쓸까?