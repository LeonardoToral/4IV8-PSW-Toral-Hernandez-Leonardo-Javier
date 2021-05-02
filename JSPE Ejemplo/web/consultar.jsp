<%-- 
    Document   : consultar
    Created on : 29/04/2021, 05:49:25 PM
    Author     : MARIA DEL REFUGIO
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" language="java" import="java.sql.*, java.util.*, java.text.*"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Consulta</title>
    </head>
    <body>
        <h1>Tabla General de Registro</h1>
        <div class="containerTable">
            <table border="2" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Ciudad</th>
                        <th>Telefono</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    <%
                        //aqui ya puedo incorporar codigo java
                        Connection con = null;
                        Statement set = null;
                        ResultSet rs = null;

                        String url, userName, password, driver;
                        url = "jdbc:mysql://localhost/registro";
                        userName = "root";
                        password = "Hongui.121";

                        driver = "com.mysql.jdbc.Driver";
                        try{
                            Class.forName(driver);
                            con = DriverManager.getConnection(url, userName, password);
                            try{
                                set = con.createStatement();
                                
                                String q;
                                q = "Select * from registrousuario order by nom_usu asc";
                                
                                rs = set.executeQuery(q);
                                while(rs.next()){
                                    %>
                    <tr>
                        <td><%=rs.getInt("id_usu")%></td>
                        <td><%=rs.getString("nom_usu")%></td>
                        <td><%=rs.getString("ciu_usu")%></td>
                        <td><%=rs.getString("tel_usu")%></td>
                        <td><a href="editar.jsp?id=<%=rs.getInt("id_usu")%>">Editar</a></td>
                        <td><a href="borrar.jsp?id=<%=rs.getInt("id_usu")%>">Borrar</a></td>
                    </tr>
                                    
                                    <%
                                }
                                rs.close();
                                set.close();
                            }catch(SQLException ed){
                                System.out.println("Error al consultar la tabla");
                                System.out.println(ed.getMessage());
                                %>
                </tbody>
            </table>
            <h1>Error no se puede visualizar los datos en este momento</h1>
                                <%
                            }
                            con.close();
                        }catch(Exception e){
                            System.out.println("Error al conectar la bd");
                            System.out.println(e.getMessage());
                            System.out.println(e.getStackTrace());
                            %>
            <h1></h1>
                            <%
                        }
                    %>
                </tbody>
                
            </table>
        </div>
    </body>
</html>
