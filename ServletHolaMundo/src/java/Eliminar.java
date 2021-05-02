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
Statement nos ayuda a poder definir y manipular los datos de las bd
creacion de la bd, insertar tablas, eleminar tablas,  create, drop, alter
    manipulacion de los datos, insert, update, delete
*/
import java.sql.Statement;
/*
nos ayuda para las querrys, o las consultas a la bd
*/
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.ServletConfig;
/**
 *
 * @author MARIA DEL REFUGIO
 */
public class Eliminar extends HttpServlet {
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    //variables globales
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    public void init(ServletConfig cfg) throws ServletException{
        //lo primero que necesitamos es trazar la ruta al servidor DB
        String URL = "jdbc:mysql:3306//localhost/registro4iv8";
        //driver:gestor:puerto//IP/nombreBD
        
        String userName = "root";
        String password = "Hongui.121";
        try{
            Class.forName("com.mysql.jdbc.Driver");
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
        throws ServletException,IOException{
        
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
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        response.setContentType("text/html;charset-UTF-8");
        try(PrintWriter out = response.getWriter()){
            int id;
            id = Integer.parseInt(request.getParameter("ideliminar"));
            String q = "delete from mregistro where id_usu="+id;
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Eliminar</title>");
            out.println("<link rel='stylesheet' href='CSS/Estilo.css'>");   
            out.println("</head>");
            out.println("<body>");
            out.println("<div class='container'>");
            try{
                set.executeUpdate(q);
                System.out.println("Registro eliminado");
                out.println("<h1>Usuario Eliminado</h1>");
            }catch(Exception e){
                out.println("<h1>Usuario No Eliminado</h1>");
                System.out.println("No se pudo eliminar el usuario");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                
            }
            try{
                rs.close();
                set.close();
            }catch(Exception e){
                
            }
            out.println("<br>"
                    + "<a href='index.html' style='color:green'>Regresar a la pagina principal</a>");
            out.println("</div>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     *
     */
    @Override
    public void destroy(){
        try{
            con.close();
            System.out.println("Se destruyo");
        }catch(SQLException e){
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
