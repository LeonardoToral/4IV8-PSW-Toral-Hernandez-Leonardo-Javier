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
/*
Connection nos ayuda a realizar la conexion con las bd, con el servidor
*/
import java.sql.Connection;
import java.sql.DriverManager;
/*
Statement nos ayuda a definir y manipular los datos de la BD
creacion de la bd, insertar tablas, eliminar tablas, create, drop, alter
manipulacion de datos, insert, update, delete
*/
import java.sql.Statement;
/**
 * Nos ayuda para las querys, o las consultas a la bd
 */
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

/**
 *
 * @author MARIA DEL REFUGIO
 */
public class Registro extends HttpServlet {
    //variables globales
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //el constructor del servlet
    //nos va a ayudar con la conexion con la bd
    
    /**
     *
     * @param cfg
     * @throws ServletException
     */
        
    @Override
    public void init(ServletConfig cfg) throws ServletException{
        //lo primero que necesitamos es trazar la ruta al servidor BD
        String URL = "jdbc:mysql:3306//localhost/registro4iv8";
        //driver:gestor:puerto//IP/nombreBD
        String userName = "root";   
        String password = "Hongui.121";
        
        try{
            //colocamos el tipo de driver
            Class.forName("com.mysql.jdbc.Driver");
                    
            /*
                en algunas ocasiones envia error al conectarse con la bd
                y eso se debe a que 
            */
            URL = "jdbc:mysql://localhost/registro4iv8";
            con = DriverManager.getConnection(URL, userName, password);
            set = con.createStatement();
            System.out.println("Conexion exitosa");
            
        }catch(Exception e){
            System.out.println("Conexion no existosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        }
        
        
    }
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request que sirve para peticiones del cliente
     * @param response servlet response que sirve para dar respuestas por parte del servidor
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
               throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String nom, appat, apmat, correo, ip, iph;
            int edad, puerto, puertoh;
            
            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            apmat = request.getParameter("apmat");
            correo = request.getParameter("correo");
            
            edad = Integer.parseInt(request.getParameter("edad"));
            
            ip = request.getLocalAddr();
            puerto = request.getLocalPort();
            
            iph = request.getRemoteAddr();
            puertoh = request.getRemotePort();
            
            /**
             * Una vez que tengamos los datos vamos a insertarlos en la bd
             * insert into nombre_tabla (definicion_atributo, definicion_atributo,...)
             * values ("valores_cadena", valores_numericos, ...)
             */
            /* TODO output your page here. You may use following sample code. */
            try{
                
                String q = "insert into Mregistro"
                        + "(nom_usu, appat_usu, apmat_usu, edad_usu, correo_usu)"
                        + "values ('"+nom+"', '"+appat+"', '"+apmat+"', "+edad+", '"+correo+"')";
                
                //ejecutar la sentencia
                set.executeUpdate(q);
                
                System.out.println("Registro exitoso");
            
            
            
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet Registro</title>"); 
                out.println("<link rel='stylesheet' href='CSS/Estilo.css'>");
                out.println("</head>");
                out.println("<body>");
                out.println("<div class='container'>"
                        + "Tu nombre es: " + nom);
                out.println("<br>"
                        + "Tu apellido paterno es: " + appat
                        + "<br>"
                        + "Tu apellido materno es: " + apmat
                        + "<br>"
                        + "Tu edad es: " +edad
                        + "<br>"
                        + "Tu correo electronico es:  "+correo);
                out.println("<br>"
                        + "IP local :" + ip
                        + "<br>"
                        + "Puerto Local :" + puerto
                        + "<br>"
                        + "IP Remota :" +iph
                        + "<br>"
                        + "Puerto Romoto :" +puertoh);
                out.println("<h1>Registro Exitoso</h1>"
                        + "<a href='index.html'>Regresar a la pagina principal</a>"
                        + "<br>"
                        + "<a href='Consultar' style='color:green'>Consultar Tabla General de Usuarios</a>");
                out.println("</div>");
                out.println("</body>");
                out.println("</html>");

            }catch(Exception e){
                
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet Registro</title>");            
                out.println("<link rel='stylesheet' href='CSS/Estilo.css'>");
                out.println("</head>");
                out.println("<body>");
                out.println("<div class='container'>");
                out.println("<h1>Registro No Exitoso, vuelva a intentarlo</h1>"
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
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        processRequest(request, response);
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
        processRequest(request, response);
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
