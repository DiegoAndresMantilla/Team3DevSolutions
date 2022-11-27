<%@page import="java.net.*"%>
<%@page import="ec.edu.espe.Model.Products"%>
<%@page import="ec.edu.espe.ProductDAO.ProductDAO"%>
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
                    <a href="index.jsp" class="navbar-brand">
                        <img src="../css/Logo.PNG" alt="iSoftware" class="brand-image img-circle elevation-3" style="opacity: .8">
                        <span class="brand-text font-weight-light">iSoftware</span>
                    </a>
                </div>
            </nav>
            
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0"> Sistema de Inventario  <small> iSotware </small></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="content " clear="right">
                    <div class="container-fluid ">
                        <form  id="form" action="Controller">
                            <div class="card card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Agregar Productos al sistema ISoftware.ec</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <%
                                            int id = Integer.parseInt(request.getParameter("id"));
                                            ProductDAO productDAO = new ProductDAO();
                                            Products product = new Products();
                                            product=productDAO.listProduct(id);
                                            productDAO.updateProduct(product);
                                        %>
                                        <div class="col-1 input-group mb-3">
                                            <label >ID</label>
                                            <div class="position-relative" >
                                                <input  type="text" class="form-control"   name="ProductId" required="requiered" value="<%=request.getParameter("id")%>">
                                            </div>
                                        </div>
                                            <div class="col-4">
                                                <label >Name</label>
                                                <div class="position-relative" >
                                                    <input type="text" class="form-control"   name="ProductName" required="requiered"value="<% out.print(product.getName());%>" >
                                                </div>               
                                            </div>
                                            <div class="col-4">
                                                <label >Brand</label>
                                                <div class="position-relative" >
                                                        <input type="text" class="form-control "  name="ProductBrand" required="requiered"value="<% out.print(product.getBrand());%>">
                                                </div>         
                                            </div>
                                            <div class="col-3">
                                                <label>Model</label>
                                                <div class="position-relative" >
                                                        <input type="text" class="form-control" name="ProductModel" required="requiered"value="<% out.print(product.getModel());%>">
                                                </div>                
                                            </div>
                                            <div class="col-1">
                                                <label>Stock</label>
                                                <div class="position-relative" >
                                                        <input type="number" class="form-control"  name="ProductStock" required="requiered"value="<% out.print(product.getStock());%>">
                                                </div>           
                                            </div>
                                            <div class="col-1">
                                                <label>Dealer Price</label>
                                                 <div class="position-relative" >
                                                        <input type="number" step="any" class="form-control" name="ProductDealerPrice" required="requiered"value="<% out.print(product.getDealer_price());%>">
                                                </div>                
                                            </div>
                                            <div class="col-1">
                                                <label>Sub Total</label>
                                                <div class="position-relative" >
                                                        <input type="number" step="any" class="form-control" name="ProductSubTotal" required="requiered"value="<% out.print(product.getSubtotal());%>">
                                                </div>                
                                            </div>
                                            <div class="col-3">
                                                <label>Apply Discount?</label>
                                                <div class="position-relative" >
                                                    <select type="text"  class="form-control" name="ProductApplyDiscount" required="requiered" name="ProductApplyDiscount"value="<% out.print(product.getApply_discount());%>">
                                                        <option value="Si">Si</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>                
                                            </div>
                                            <div class="col-2">
                                                <label>Discount Value</label>
                                                <div class="position-relative" > 
                                                     <input type="number" step="any" class="form-control" name="ProductDiscountValue" required="requiered" value="<% out.print(product.getDiscount_value());%>">
                                                </div>                
                                            </div>                                
                                    </div>
                                </div>
                                                
                                <div class="card-footer ">
                                    <button type="submit" class="btn btn-primary"  value="UpdateProduct" name="accion">Actualizar</button>
                                    <button class="btn btn-outline-secondary">
                                        <a href="index.jsp">Regresar</a> 
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>           
                                                                        
        <footer class="main-footer">
            <div class="float-right d-none d-sm-block">
                <b>Version</b> 3.2.0
            </div>
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        </footer>
                                                
        <aside class="control-sidebar control-sidebar-dark"></aside>
        <script src="../../plugins/jquery/jquery.min.js"></script>
        <!-- Bootstrap 4 -->
        <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- AdminLTE App -->
        <script src="../../dist/js/adminlte.min.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="../../dist/js/demo.js"></script>
    </body>
</html>
  
          
          
          
          
          
          
          