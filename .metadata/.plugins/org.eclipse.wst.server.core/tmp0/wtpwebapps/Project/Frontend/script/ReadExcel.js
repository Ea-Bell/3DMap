/**
 * 
 * 데이터 컨트롤 할시 row[i]["Time"]식으로 데이터 컨트롤 하시오.
 * 변수명
 * Time            일시분
 * Speed           속도
 * Rpm             분당회전수
 * Latitude        위도
 * Longitude       경도
 * Azimuth         방위각
 * XAcceleration   X가속도
 * YAcceleration   Y가속도
 * 
 * rows            json형 (0이 기준) 사용시 data[0]["Time"]이 기준에 맞춰 사용할것.
 * 
 * 함수
 * readExcel()    엑셀 파일 읽기
 * ExcelLenth()   엑셀 길이
 */
var rows;
var num;
function readExcel() {
			let input = event.target;
			let reader = new FileReader();
		
			
			reader.onload = function () {
				let data =reader.result;
				let workBook = XLSX.read(data, {type: 'binary'});
				
				workBook.SheetNames.forEach(function (sheetName) {
					console.log('SheetName:' + sheetName);					
					 rows= XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
					//함수는 밑에다 작성하시오.
					Exceldata(rows);
					num=ExcelLenth(rows);					
				})				
				//KakaoMapComponent와 연결된 함수 
				//라이프타임과 스코프 생각할것.
				let markerPosition={};
				for(let i=0;i<rows.length;i++){	
					markerPosition[i]={
					latlng: new kakao.maps.LatLng(rows[i]['Latitude'],rows[i]['Longitude'])
						};
				}
				const kakaoMapcomponent = new KakaoMapcomponent();
				kakaoMapcomponent.ExcelMap(markerPosition);				
			};
			reader.readAsBinaryString(input.files[0]);			
}

/**
 ** data             변수 rows를 받아 쓴다.
 *
 *
 *
 *함수
 *Exceldata(data)    데이타 변환용으로 쓰일예정
**/
function Exceldata(data){	
	$("#Xtext").val(data[0]['XAcceleration']);
	$("#Ytext").val(data[0]['YAcceleration']);
	
}
/** 
** 엑셀의 길이를 반환하는 함수.
**	data 엑셀 Josn으로 받음
**	return 값: 엑셀의 총길이.  
**/
function ExcelLenth(data){
	return data.length;
}

