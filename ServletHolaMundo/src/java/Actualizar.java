/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import javax.servlet.ServletConfig;
/**
 *
 * @author MARIA DEL REFUGIO
 */
public class Actualizar extends HttpServlet {
    private Connection con;
    private Statement set;
    private ResultSet rs;

    /**
     *
     * @param cfg
     * @throws ServletException
     */
    @Override
    public void init(ServletConfig cfg) throws ServletException{
        
        //lo primero que necesitamos es trazar la ruta al servidor DB
        String URL = "jdbc:mysql:3306//localhost/registro4iv8";
        //driver:gestor:puerto//IP/nombreBD
        
        String userName = "root";
        String password = "Hongui.121";
        
        try{
            //colocamos el tipo de driver
            Class.forName("com.mysql.jdbc.Driver");
            
            /*
            en algunas ocaciones enviar error al conectarse con la bd
            y eso se debe a que ya estegrado el puerto en el driver
            URL = "jdbc:mysql://localhost/registro4iv8";
            */
            URL = "jdbc:mysql://localhost/registro4iv8";
            con = DriverManager.getConnection(URL, userName, password);
            set = con.createStatement();
            System.out.println("Conexion exitosa");
        
        }catch(Exception e){
            
            System.out.println("Conexion no exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        
        }
    }
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    /**
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
    }
    
    /**
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String nom, appat, apmat, correo;
            int edad, id;
            
            nom = request.getParameter("nom_act");
            appat = request.getParameter("appat_act");
            apmat = request.getParameter("apmat_act");
            correo = request.getParameter("cor_act");
            
            edad = Integer.parseInt(request.getParameter("eda_act"));
            id = Integer.parseInt(request.getParameter("id_act"));
            
            /**
             * Una vez que tengamos los datos vamos a insertarlos en la bd
             * insert into nombre_tabla (definicion_atributo, definicion_atributo,...)
             * values ("valores_cadena", valores_numericos, ...)
             */
            /* TODO output your page here. You may use following sample code. */
            try{
                
                String q = "update mregistro set"
                        + " nom_usu='"+nom+"', appat_usu='"+appat+"', apmat_usu='"+apmat+"', edad_usu='"+edad+"', correo_usu='"+correo+"' "
                        + "where id_usu = "+id;
                
                //ejecutar la sentencia
                set.executeUpdate(q);
                System.out.println("Actualizacion exitosa");
                
            
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet Registro</title>");     
                out.println("<link rel='stylesheet' href='CSS/Estilo.css'>");
                out.println("</head>");
                out.println("<body>");
                out.println("<div class='container'>"
                        + "Tu nombre es: "+ nom);
                out.println("<br>"
                        + "Tu apellido paterno es: " + appat
                        + "<br>"
                        + "Tu apellido materno es: " + apmat
                        + "<br>"
                        + "Tu edad es: " +edad
                        + "<br>"
                        + "Tu correo electronico es:  "+correo);
                out.println("<h1>Actualizacion Exitosa</h1>"
                        + "<a href='index.html'>Regresar a la pagina principal</a>"
                        + "<br>"
                        + "<a href='Consultar'>Consultar Tabla General de Usuarios</a>");
                out.println("</body>");
                out.println("</html>");

            }catch(Exception e){
                
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet Registro</title>");            
                out.println("</head>");
                out.println("<body>");
                out.println("<h1>Actualizacion No Exitosa, vuelva a intentarlo</h1>"
                    + "<a href='index.html' style='color:green'>Regresar a la pagina principal</a>");
                out.println("</div>");
                out.println("</body>");
                out.println("</html>");
                
                System.out.println("No se registro en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            
            }
        }
    }

    /**
     *
     */
    @Override
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }
    
    /**
     *
     * @return
     */
    @Override
    public String getServletInfo(){
        return "Short description";
    }
}
