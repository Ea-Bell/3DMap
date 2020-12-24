/**
 * 인자
 * Imgsrc: 이미지 주소
 * Position: x값과 y값을 가지고 있는 marker주소.
 */

var MultiMarker =  function (Imgsrc, Position){
	for (var i = 0; i < 30; i ++) {
		
		 var imageSize = new kakao.maps.Size(24, 35);
		// 마커 이미지를 생성합니다    
		    var markerImage = new kakao.maps.MarkerImage(Imgsrc, imageSize);
		    
		    // 마커를 생성합니다
		    var marker = new kakao.maps.Marker({
		        map: map, // 마커를 표시할 지도
		        position: Position[i].latlng, // 마커를 표시할 위치
		        title : Position[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
		        image : markerImage // 마커 이미지 
		    });	
	}	
}