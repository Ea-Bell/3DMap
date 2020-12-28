/**
 * 
 */
var map; // 맵의 접근 가능;


var Start= function Component(){
	const kakaoMapcomponent = new KakaoMapcomponent();
	kakaoMapcomponent.StartMap();	
}

 class KakaoMapcomponent {
	 
	constructor() {
	}
	StartMap(){
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(38.21440383, 128.4376055),
			level: 3
		};		
		 map = new kakao.maps.Map(container, options);		
	}
	
	ExcelMap(markerPosition){
		let ExcelLenghs= num; //이 변수가 필요한지에 대한 논의 후 결정하시오.
						
	/* 테스트용 코드
	 * MakerPosition[][]
		console.log(markerPosition[0]['Position']['La']);
		console.log(markerPosition[1]['Position']['Ma']);
		console.log(markerPosition[2]['Position']);
		console.log(markerPosition[3]['Position']);
		console.log(markerPosition[4]['Position']);
	* 결과: 잘나옴.
	*/	
		/*클릭 리스너임
		ClickListener();
		*/		
		debugger
		let Imgsrc= $("#img").attr("src");
			
		console.log(Imgsrc);
		const kakao = new KakaoMapcomponent();
		
		kakao.MultiMarker(Imgsrc, markerPosition);
	}
	
	MultiMarker(Imgsrc, markerPosition){
		//마커 100개 표시
		for(let i =0 ; i<100; i++){
			let imageSize = new kakao.maps.Size(24, 35);
			let markerImage= new kakao.maps.MarkerImage(Imgsrc, imageSize);			
		 let marker = new kakao.maps.Marker({
		        map: map, // 마커를 표시할 지도
		        position: markerPosition[i].latlng, // 마커를 표시할 위치	        
		        image : markerImage // 마커 이미지 
		    });		 
		}
	}
	
	/**
	 *         인수
	 *          MyPosition: 현재 내 위치배열(x,y)값
	 * DestinationPosition: 다음 지점 까지의배열 (x,y)값
	 * 
	 * 
	 *  return: degree;
	 */
	getAngle (MyPosition, DestinationPosition) {
		/**
		 *	  변수목록
		 *    px1: 내위치의x값
		 *    px2: 다음 지점의 x값
		 *    py1: 내위치의 y값
		 *    py2: 다음 지점의 y값
		 *    x  : px2-px1
		 *    y  : py2-py2
		 *      
		 *    radian:     
		 *    degree: 방향값
		 **/
		
		const px1=0, py1=0;
		 let px2=-2, py2=-2;
		 const PI=Math.PI;
		 	
		 let x = px2-px1;
		 let y = py2-py1;

		 let radian = Math.atan2(y, x);
		 let degree= radian*180/PI;
		 return degree; 
	}
}
 //시작함수.
 Start();
