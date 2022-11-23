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
        <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Tempusdominus Bootstrap 4 -->
        <link rel="stylesheet" href="../plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
        <!-- iCheck -->
        <link rel="stylesheet" href="../plugins/icheck-bootstrap/icheck-bootstrap.min.css">
        <!-- JQVMap -->
        <link rel="stylesheet" href="../plugins/jqvmap/jqvmap.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="../dist/css/adminlte.min.css">
        <!-- overlayScrollbars -->
        <link rel="stylesheet" href="../plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
        <!-- Daterange picker -->
        <link rel="stylesheet" href="../plugins/daterangepicker/daterangepicker.css">
        <!-- summernote -->
        <link rel="stylesheet" href="../plugins/summernote/summernote-bs4.min.css">
    </head>
    <body class="hold-transition layout-top-nav">
        <div class="wrapper">
            <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div class="container">
                    <a href="../index.jsp" class="navbar-brand">
                        <img src="../css/Logo.PNG" alt="iSoftware" class="brand-image img-circle elevation-3" style="opacity: .8">
                        <span class="brand-text font-weight-light">iSoftware</span>
                    </a>
                    <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse order-3" id="navbarCollapse">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="index3.html" class="nav-link"></a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"></a>
                            </li>      
                        </ul>
                    </div>
            </nav>
            <div class="content-header">
                <div class="container">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0"> Sistema de Inventario  <small> iSotware </small></h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="../index.jsp">Inicio</a></li>
                                <li class="breadcrumb-item active">Inventario</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <%
                ProductDAO modelosDAO = new ProductDAO();
                ArrayList<Products> product;
                product = modelosDAO.getProductos();   
            %>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Lista de Productos</h3>
                </div>
                <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped ">
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
                                    <a class="btn btn-success" href="editProducts.jsp?id=<% out.print(productos.getId());%>">Edit</a>&nbsp;
                                </td>
                                <td class="text-center"> 
                                    <a class="btn btn-success" href="deleteProducts.jsp?id=<% out.print(productos.getId());%>" >Eliminar</a>&nbsp;
                                </td>
                            </tr>
                            <%
                                }
                            %>
                        </tbody>
                    </table>
                        <div class="card-footer "> 
                            <button class="btn btn-outline-secondary">     
                            <a href="../index.jsp">Regresar</a>
                            </button>
                        </div> 
                </div>
            </div>
    </body>
</html>




