<%@page import="java.awt.desktop.PrintFilesEvent"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="java.lang.Math" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>

  <!-- css 선언부 -->


<!-- 자바 스크립트 선언부 -->
<script  src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1d0b0cf39992a15bd20a78962f4b44a4"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.6/xlsx.full.min.js"></script>
<script type="text/javascript" src="/Frontend/script/KakaoMapComponent.js"></script>
<body>

<div id="map1" style="width: 100%; height: 200px; "  onload="kakaoConponent()">
		</div>
		
<%
double px1=0, py1=0;
double px2=-2, py2=-2;
double PI=Math.PI;
	
double  x =px2-px1;
double y = py2-py1;

double radian = Math.atan2(y, x);
double degree= radian*180/PI;
out.println(degree);
%>

</body>
</html>