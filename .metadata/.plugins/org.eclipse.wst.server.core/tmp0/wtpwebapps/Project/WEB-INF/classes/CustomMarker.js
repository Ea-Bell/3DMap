/**
 * 
 */





/**	
 ** 	app.map 맵 컨트롤 변수
 **		rows    엑셀 변수 컨트롤 변수
 **/

/* var map = app.map; //지도 생성 불러오기.
//지도를 클릭한 위치에 표출할 마커입니다.

var marker = new kakao.maps.Marker({
	
	//지도 중심좌표에 마커를 생성합니다.
	position: map.getCenter()
});
 //지도에 마커를 표시합니다
 marker.setMap(map);
 
 //지도에 클릭 이벤트를 등록
 //지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출
 kakao.maps.event.addListener(map, 'click', function(mouseEvent){
	 
	 //클릭한 위도, 경도 정보를 가져옵니다.
	 var latlng = mouseEvent.latLng;
	 
	 //마커 위치를 클릭한 위치로 옮깁니다.
	 marker.setPosition(latlng);
	 
	 var message= '클릭한 위치의 위도는'+ latlng.getLat()+'이고,';
	 message+='경도는'+latlng.getLng()+'입니다';
	 
	 var resultDiv = document.getElementById('clickLatlng');
	 resultDiv.innerHTML=message;
 });*/