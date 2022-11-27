<%@page import="ec.edu.espe.ProductDAO.ProductDAO"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="ec.edu.espe.Model.Products"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>iSoftware</title>
        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Tempusdominus Bootstrap 4 -->
        <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
        <!-- iCheck -->
        <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
        <!-- JQVMap -->
        <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="dist/css/adminlte.css">
        <!-- overlayScrollbars -->
        <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
        <!-- Daterange picker -->
        <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">
        <!-- summernote -->
        <link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css">
    </head>
    <body class="layout-top-nav">
        <div class="wrapper">
            <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div class="container">
                    <a href="../index.jsp" class="navbar-brand">
                        <img src="css/Logo.PNG" alt="iSoftware" class="brand-image img-circle elevation-3" style="opacity: .8">
                        <span class="brand-text font-weight-light">iSoftware</span>
                    </a>
            </nav>
            
            <div class="content-header">
                <div class="container">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0"> Sistema de Inventario  <small> iSotware </small></h1>
                        </div>
                    </div>
                </div>
            </div>
            <%
                ProductDAO productsDAO = new ProductDAO();
                ArrayList<Products> product;
                product = productsDAO.getProductos();   
            %>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Lista de Productos</h3>
                </div>
                <div class="card-body">
                    <table id="example1" ction="Controller" class=" table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th >ID</th>
                                <th >Name</th>
                                <th >Brand</th>
                                <th >Model</th>
                                <th >Stock</th>
                                <th >Dealer price</th>
                                <th >Subtotal</th>
                                <th >Total + iva</th>
                                <th >Unit profit</th>
                                <th >Total profit</th>
                                <th >Apply discount?</th>
                                <th >Discount value</th>
                                <th >Discount price</th>
                            </tr>
                        </thead>
                        <%
                          for(Products productos : product){
                        %>
                        <tbody>
                            <tr>
                                <td value="<% out.print(productos.getId());%>"><% out.print(productos.getId());%></td>
                                <td ><% out.print(productos.getName());%></td>
                                <td ><% out.print(productos.getBrand());%></td>
                                <td ><% out.print(productos.getModel());%></td>
                                <td ><% out.print(productos.getStock());%></td>
                                <td ><% out.print(productos.getDealer_price());%> </td>
                                <td ><% out.print(productos.getSubtotal());%> </td>
                                <td ><% out.print(productos.getTotal_iva());%> </td>
                                <td ><% out.print(productos.getUnit_profit());%> </td>
                                <td ><% out.print(productos.getTotal_profit());%> </td>
                                <td ><% out.print(productos.getApply_discount());%> </td>
                                <td ><% out.print(productos.getDiscount_value());%> </td>
                                <td ><% out.print(productos.getDiscount_price());%> </td>
                                <td class="text-center">
                                    <a href="Controller?accion=updateProducts&id=<%= productos.getId()%>">
                                        <button class="btn btn-primary">
                                            Editar
                                        </button>
                                    </a>
                                </td>
                                <td class="text-center"> 
                                    <a  href="Controller?accion=RemoveProduct&id=<%= productos.getId()%>">
                                        <button class="btn btn-success">
                                            Eliminar
                                        </button>
                                    </a>
                                </td>
                            </tr>
                            <%
                                }
                            %>
                        </tbody>
                    </table>
                        
                    <div class="card-footer "> 
                       <button class="btn btn-outline-secondary">     
                          <a href="index.jsp">Regresar</a>
                        </button>
                    </div> 
                </div>
            </div>
    </body>
</html>




