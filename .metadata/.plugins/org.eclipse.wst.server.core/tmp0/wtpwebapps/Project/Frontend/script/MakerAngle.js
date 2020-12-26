/**
 *         인수
 *          MyPosition: 현재 내 위치배열(x,y)값
 * DestinationPosition: 다음 지점 까지의배열 (x,y)값
 * 
 *   변수목록
 *    px1: 내위치의x값
 *    px2: 다음 지점의 x값
 *    py1: 내위치의 y값
 *    py2: 다음 지점의 y값
 *      x: px2-px1
 *      y: py2-py2
 * radian: 
 * degree:     방향값
 * 
 *  return: degree;
 */

 //방향각 구하는 함수.
 var getAngle= function (MyPosition, DestinationPosition) {
	 const px1=0, py1=0;
	 const px2=-2, py2=-2;
	 const PI=Math.PI;
	 	
	 const x = px2-px1;
	 const y = py2-py1;

	 const radian = Math.atan2(y, x);
	 const degree= radian*180/PI;
	 return degree; 
}