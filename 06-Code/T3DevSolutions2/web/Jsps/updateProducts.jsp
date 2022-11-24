
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
        <div id="title" align="text-center">Updated products</div>
    </head>
    <body>
        <header>Products Updated Correctly</header>
        <% 
            DecimalFormat df = new DecimalFormat();
            ConnectMongoDB connectionmongodb = new ConnectMongoDB();
            MongoDatabase database = connectionmongodb.connection();
            MongoCollection collection = database.getCollection("Products");
            Document document = new Document(); 
            ProductDAO productdao = new ProductDAO();
            
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
            Document query = new Document().append("id",  id);
            Bson updates = Updates.combine(                  
                    Updates.set("name", productos.getName()),
                    Updates.set("brand", productos.getBrand()),
                    Updates.set("model", productos.getModel()),
                    Updates.set("stock", productos.getStock()),
                    Updates.set("dealer_price", productos.getDealer_price()),
                    Updates.set("subtotal", productos.getSubtotal()),
                    Updates.set("total_iva", productos.getTotal_iva()),
                    Updates.set("unit_profit", productos.getUnit_profit()),
                    Updates.set("total_profit", productos.getTotal_profit()),
                    Updates.set("apply_discount", productos.getApply_discount()),
                    Updates.set("discount_value", productos.getDiscount_value()),
                    Updates.set("discount_price", productos.getDiscount_price())
            );
                 UpdateOptions options = new UpdateOptions().upsert(true);       
                 UpdateResult result = collection.updateOne(query, updates, options);
        %>
    </body>
</html>

