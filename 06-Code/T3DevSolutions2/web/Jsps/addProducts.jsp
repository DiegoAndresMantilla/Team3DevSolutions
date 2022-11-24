<%@page import="ec.edu.espe.Model.Products"%>
<%@page import="org.bson.Document"%>
<%@page import="ec.edu.espe.ConnectDB.ConnectMongoDB"%>
<%@page import="ec.edu.espe.ProductDAO.ProductDAO"%>
<%@page import="java.text.DecimalFormat"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
                  rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
                  crossorigin="anonymous">
        <link href="../CSS/estilos.css" rel="stylesheet" type="text/css"/>
        <meta http-equiv="Refresh" content="3;URL=../index.jsp">
        <div id="title" align="text-center">Added products.</div>
    </head>
    <body>
        <header>Products added correctly</header>
            <% 
                DecimalFormat df = new DecimalFormat();
                ConnectMongoDB connectionmongodb = new ConnectMongoDB();
                ConnectMongoDB mongoDBMetodos = new ConnectMongoDB();
                mongoDBMetodos.ConnectionMongo();
                ProductDAO productdao = new ProductDAO();
                Document document = new Document();                     

                int id;
                String name;
                String brand;
                String model; 
                int stock;
                double dealer_price ;
                double subtotal;
                double total_iva;
                double unit_profit;
                double total_profit;
                String apply_discount;
                double discount_value;
                double discount_price;

                id = Integer.parseInt(request.getParameter("ProductId")) ;
                name = request.getParameter("ProductName");
                brand = request.getParameter("ProductBrand");
                model= request.getParameter("ProductModel");
                stock = Integer.parseInt(request.getParameter("ProductStock")) ;
                dealer_price = Double.parseDouble(request.getParameter("ProductDealerPrice"));
                subtotal = Double.parseDouble(request.getParameter("ProductSubTotal"));
                apply_discount = request.getParameter("ProductApplyDiscount");       
                discount_value = Double.parseDouble(request.getParameter("ProductDiscountValue"));

                /*Business Rules*/
                unit_profit= productdao.calculateUnitProfit(subtotal, dealer_price);
                total_iva = productdao.calculateIva(subtotal);
                total_profit= productdao.calculateTotalProfit(unit_profit, stock);
                discount_price = productdao.calculateDiscountPrice(total_iva, discount_value);

                Products productos = new Products (id,name,brand, model ,stock,dealer_price,subtotal,total_iva,
                unit_profit,total_profit,apply_discount,discount_value,discount_price);

                productos.setTotal_iva(total_iva); 
                productos.setUnit_profit(unit_profit);
                productos.setTotal_profit(total_profit);
                productos.setDiscount_price(discount_price);

                document.put("id", productos.getId());
                document.put("name", productos.getName());
                document.put("brand", productos.getBrand());
                document.put("model", productos.getModel());
                document.put("stock", productos.getStock());
                document.put("dealer_price", productos.getDealer_price());
                document.put("subtotal", productos.getSubtotal());
                document.put("total_iva", productos.getTotal_iva());
                document.put("unit_profit", productos.getUnit_profit());
                document.put("total_profit", productos.getTotal_profit());
                document.put("apply_discount", productos.getApply_discount());
                document.put("discount_value", productos.getDiscount_value());
                document.put("apply_discount", productos.getApply_discount());
                document.put("discount_price", productos.getDiscount_price());

                connectionmongodb.save(document,"Products", connectionmongodb.database);
            %>
    </body>
</html>