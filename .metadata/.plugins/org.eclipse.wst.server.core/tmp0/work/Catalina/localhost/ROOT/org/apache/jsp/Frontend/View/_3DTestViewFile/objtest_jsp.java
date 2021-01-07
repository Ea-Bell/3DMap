/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.30
 * Generated at: 2021-01-07 18:56:39 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.Frontend.View._3DTestViewFile;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class objtest_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("\r\n");
      out.write("<head>\r\n");
      out.write("    <title>Example 08.06 - Load OBJ model </title>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"/Frontend/script/libs/three.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"/Frontend/script/libs/OBJLoader.js\"></script>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("    <script type=\"text/javascript\" src=\"/Frontend/script/libs/stats.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"/Frontend/script/libs/dat.gui.js\"></script>\r\n");
      out.write("    <style>\r\n");
      out.write("        body {\r\n");
      out.write("            /* set margin to 0 and overflow to hidden, to go fullscreen */\r\n");
      out.write("            margin: 0;\r\n");
      out.write("            overflow: hidden;\r\n");
      out.write("        }\r\n");
      out.write("    </style>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\r\n");
      out.write("<!-- Stats-output hidden=true로 둘것 \r\n");
      out.write("\t사유: 없애면 화면이 로더가 안돼서 에러가 난다.\r\n");
      out.write(" -->\r\n");
      out.write(" <div id=\"Stats-output\" hidden=\"true\">\r\n");
      out.write("</div> \r\n");
      out.write("<!-- Div which will hold the Output -->\r\n");
      out.write("<div id=\"WebGL-output\">\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- Javascript code that runs our Three.js examples -->\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("\r\n");
      out.write("    // once everything is loaded, we run our Three.js stuff.\r\n");
      out.write("    function init() {\r\n");
      out.write("\r\n");
      out.write("        var stats = initStats();\r\n");
      out.write("\r\n");
      out.write("        // create a scene, that will hold all our elements such as objects, cameras and lights.\r\n");
      out.write("        var scene = new THREE.Scene();\r\n");
      out.write("\r\n");
      out.write("        // create a camera, which defines where we're looking at.\r\n");
      out.write("        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n");
      out.write("\r\n");
      out.write("        // create a render and set the size\r\n");
      out.write("        var webGLRenderer = new THREE.WebGLRenderer();\r\n");
      out.write("        webGLRenderer.setClearColor(new THREE.Color(0xffffff, 1.0));\r\n");
      out.write("        webGLRenderer.setSize(window.innerWidth, window.innerHeight);\r\n");
      out.write("        webGLRenderer.shadowMapEnabled = true;\r\n");
      out.write("\r\n");
      out.write("        // position and point the camera to the center of the scene\r\n");
      out.write("        camera.position.x = 0;\r\n");
      out.write("        camera.position.y = 44.452;\r\n");
      out.write("        camera.position.z = -184.184;\r\n");
      out.write("        camera.rotation.x=-90;\r\n");
      out.write("        camera.lookAt(scene.position);\r\n");
      out.write("        scene.add(camera);\r\n");
      out.write("\r\n");
      out.write("        // add spotlight for the shadows\r\n");
      out.write("        var spotLight = new THREE.DirectionalLight(0xffffff);\r\n");
      out.write("        spotLight.position.set(10, 10, 10);\r\n");
      out.write("        spotLight.intensity = 1;\r\n");
      out.write("        scene.add(spotLight);\r\n");
      out.write("\r\n");
      out.write("        // add the output of the renderer to the html element\r\n");
      out.write("        document.getElementById(\"WebGL-output\").appendChild(webGLRenderer.domElement);\r\n");
      out.write("\r\n");
      out.write("        // call the render function\r\n");
      out.write("        var step = 0;\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("        // setup the control gui\r\n");
      out.write("        var controls = new function () {\r\n");
      out.write("            // we need the first child, since it's a multimaterial\r\n");
      out.write("\r\n");
      out.write("        };\r\n");
      out.write("\r\n");
      out.write("        var mesh;\r\n");
      out.write("\t\tvar pineconeobj='/Frontend/script/libs/assets/models/pinecone.obj';\r\n");
      out.write("\t\tvar carobj='/Frontend/3DObj/carmodeltest.obj';\r\n");
      out.write("        var loader = new THREE.OBJLoader();\r\n");
      out.write("        loader.load(carobj, function (loadedMesh) {\r\n");
      out.write("            var material = new THREE.MeshLambertMaterial({color: 0x5C3A21});\r\n");
      out.write("\r\n");
      out.write("            // loadedMesh is a group of meshes. For\r\n");
      out.write("            // each mesh set the material, and compute the information\r\n");
      out.write("            // three.js needs for rendering.\r\n");
      out.write("            loadedMesh.children.forEach(function (child) {\r\n");
      out.write("                child.material = material;\r\n");
      out.write("                child.geometry.computeFaceNormals();\r\n");
      out.write("                child.geometry.computeVertexNormals();\r\n");
      out.write("            });\r\n");
      out.write("\r\n");
      out.write("            mesh = loadedMesh;\r\n");
      out.write("            loadedMesh.scale.set(0.5, 0.5, 0.5);\r\n");
      out.write("\r\n");
      out.write("            loadedMesh.rotation.x =0;\r\n");
      out.write("            scene.add(loadedMesh);\r\n");
      out.write("        });\r\n");
      out.write("\r\n");
      out.write("        render()\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("       function render() {\r\n");
      out.write("            stats.update();\r\n");
      out.write("\r\n");
      out.write("           if (mesh) {\r\n");
      out.write("                mesh.rotation.y += 0;\r\n");
      out.write("                mesh.rotation.x += 0;\r\n");
      out.write("//                mesh.rotation.y+=0.006;\r\n");
      out.write("            } \r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("            // render using requestAnimationFrame\r\n");
      out.write("             requestAnimationFrame(render); \r\n");
      out.write("            webGLRenderer.render(scene, camera);\r\n");
      out.write("        } \r\n");
      out.write("\r\n");
      out.write("        function initStats() {\r\n");
      out.write("\r\n");
      out.write("            var stats = new Stats();\r\n");
      out.write("            stats.setMode(0); // 0: fps, 1: ms\r\n");
      out.write("\r\n");
      out.write("            // Align top-left\r\n");
      out.write("            stats.domElement.style.position = 'absolute';\r\n");
      out.write("            stats.domElement.style.left = '0px';\r\n");
      out.write("            stats.domElement.style.top = '0px';\r\n");
      out.write("\r\n");
      out.write("            document.getElementById(\"Stats-output\").appendChild(stats.domElement);\r\n");
      out.write("\r\n");
      out.write("            return stats;\r\n");
      out.write("        } \r\n");
      out.write("    }\r\n");
      out.write("    \r\n");
      out.write("    window.onload = init;\r\n");
      out.write("</script>\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
      out.write("\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}