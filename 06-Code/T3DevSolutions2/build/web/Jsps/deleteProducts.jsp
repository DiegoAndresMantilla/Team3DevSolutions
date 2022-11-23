<%@page import="com.mongodb.client.result.DeleteResult"%>
<%@page import="com.mongodb.client.model.Filters"%>
<%@page import="ec.edu.espe.ProductDAO.ProductDAO"%>
<%@page import="com.mongodb.client.MongoCollection"%>
<%@page import="com.mongodb.client.MongoDatabase"%>
<%@page import="com.mongodb.client.model.UpdateOptions"%>
<%@page import="org.bson.conversions.Bson"%>
<%@page import="com.mongodb.client.model.Updates"%>
<%@page import="com.mongodb.client.result.UpdateResult"%>
<%@page import="com.mongodb.BasicDBObject"%>
<%@page import="ec.edu.espe.Model.Products"%>
<%@page import="org.bson.Document"%>
<%@page import="ec.edu.espe.ConnectDB.ConnectMongoDB"%>
<%@page import="java.text.DecimalFormat"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="../CSS/estilos.css" rel="stylesheet" type="text/css"/>
        <meta http-equiv="Refresh" content="3;URL=../index.jsp">
        <div id="title" align="text-center">Products removed.</div>
    </head>
    <body>
        <header>Products Successfully Removed</header>
        <%
            int id = Integer.parseInt(request.getParameter("id"));
            ProductDAO modelosDAO = new ProductDAO();
            modelosDAO.deleteProduct(id);                 
        %>
    </body>
</html>
