/**
* 
*/
 var app = function kakaoConponent() {
	var container = document.getElementById('map');
	
	var options = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3
	};
	var map = new kakao.maps.Map(container, options);	
	var ExcelLenghs= num; //이 변수가 필요한지에 대한 논의 후 결정하시오.
	// 지도에 클릭 이벤트를 등록합니다
	// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
	let markerPosition={};
	
	for(let i=0;i<ExcelLenghs;i++){	
		markerPosition[i]={
		Position: new kakao.maps.LatLng(rows[i]['Latitude'],rows[i]['Longitude'])
			};
		}
	
/* 테스트용 코드
 * MakerPosition[][]
	console.log(markerPosition[0]['Position']['La']);
	console.log(markerPosition[1]['Position']['Ma']);
	console.log(markerPosition[2]['Position']);
	console.log(markerPosition[3]['Position']);
	console.log(markerPosition[4]['Position']);
* 결과: 잘나옴.
*/	
	
	//
	for (var i=0; i<ExcelLenghs;i++){
	var marker = new kakao.maps.Marker({
		map:map, // 마커를 표시할 지도
		position:markerPosition[i]['Position']
	});
	}
	
	/*클릭 리스너임
	ClickListener();
	*/
	//지도에 표시된 마커 객체를 가지고 있을 배열입니다.
	var markers=[];
	
	//마커를 생성하고 지도위에 표시하는 함수.
	function addMaker(position) {
			// 지도를 클릭한 위치에 표출할 마커입니다
			var marker = new kakao.maps.Marker({ 
			    // 지도 중심좌표에 마커를 생성합니다 
				position: position
			}); 			
			//마커가 지도 위에 표시되도록 설정합니다.
			marker.setMap(map);			
			//생성된 마커를 배열에 추가합니다.
			markers.push(marker);
	}
	
	   function setMarkers(map){
		   for(var i =0; i<makers.length; i++){
			   markers[i].setMap(map);
		   }
	   }	   
	   function showMakers() {
		setMarkers(map);
	}
	   //"마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다.
	   function hideMakers(){
		   setMarkers(null);
	   }   
//app함수의 끝	   
}
//실행 함수.
app();