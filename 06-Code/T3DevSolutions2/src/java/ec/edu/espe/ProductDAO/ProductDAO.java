
package ec.edu.espe.ProductDAO;

import ec.edu.espe.ConnectDB.ConnectMongoDB;
import ec.edu.espe.Model.Products;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.io.IOException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.ParseException;
import java.util.ArrayList;
import org.bson.Document;
import ec.edu.espe.Interfaces.ProductCrud;
import com.mongodb.client.result.DeleteResult;
import java.text.DecimalFormat;
import com.mongodb.client.model.UpdateOptions;
import org.bson.conversions.Bson;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.UpdateResult;

public class ProductDAO implements ProductCrud {
    
    PreparedStatement preparedStatement;
    ResultSet resultSet;
    Products product = new Products();
    
    public ArrayList <Products> getProductos() throws ParseException, IOException {
       
       ConnectMongoDB connectionmongodb = new ConnectMongoDB();
       ArrayList<Products> products = new ArrayList<>();
       MongoDatabase database = connectionmongodb.connection();
       MongoCollection collection = database.getCollection("Products");
        try (MongoCursor<Document> cursor = collection.find().iterator()) {
            
            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Products producUnit = new Products();
                producUnit.setId(jsonObject.get("id").getAsInt());
                producUnit.setName(jsonObject.get("name").getAsString());
                producUnit.setBrand(jsonObject.get("brand").getAsString());
                producUnit.setModel(jsonObject.get("model").getAsString());
                producUnit.setStock(jsonObject.get("stock").getAsInt());
                producUnit.setDealer_price(jsonObject.get("dealer_price").getAsDouble());
                producUnit.setSubtotal(jsonObject.get("subtotal").getAsDouble());
                producUnit.setTotal_iva(jsonObject.get("total_iva").getAsDouble());
                producUnit.setUnit_profit(jsonObject.get("unit_profit").getAsDouble());
                producUnit.setTotal_profit(jsonObject.get("total_profit").getAsDouble());
                producUnit.setApply_discount(jsonObject.get("apply_discount").getAsString());
                producUnit.setDiscount_value(jsonObject.get("discount_value").getAsDouble());
                producUnit.setDiscount_price(jsonObject.get("discount_price").getAsDouble());
                products.add(producUnit);
          }
           
       }
        return products;   
           
}
    
     
             

    @Override
    public float calculateIva(double subtotal) {
        double total_iva;
        total_iva= (subtotal*1.12);
        return (float) total_iva;
    }

    @Override
    public float calculateUnitProfit(double subtotal, double dealer_price) {
        double unit_profit;
        unit_profit= (subtotal-dealer_price);
        return (float) unit_profit;
    }

    @Override
    public float calculateTotalProfit(double unit_profit, int stock) {
        double total_profit;
        total_profit= (unit_profit*stock);
        return (float) total_profit;
    }

    @Override
    public float calculateDiscountPrice(double total_iva, double discount_value) {
        double discount_price;
        discount_price= (total_iva*discount_value)/100;
        return (float) discount_price;
    }

    @Override
    public boolean deleteProduct(int ident) {
        ConnectMongoDB connectionmongodb = new ConnectMongoDB();
        MongoDatabase database = connectionmongodb.connection();
        MongoCollection<Document> collection = database.getCollection("Products");
        BasicDBObject query  = new BasicDBObject("id",ident);      
        Document doc = collection.find(query).first();
        DeleteResult result = collection.deleteOne(query); 
        
        return false;
    }

    @Override
    public Products listProduct(int ident) {
        ConnectMongoDB connectionmongodb = new ConnectMongoDB();
        MongoDatabase database = connectionmongodb.connection();
        MongoCollection<Document> collection = database.getCollection("Products");
        BasicDBObject query  = new BasicDBObject("id",ident);      
        Document doc = collection.find(query).first();
       
                
                Products producUnit = new Products();
                producUnit.setId((int) doc.get("id"));
                producUnit.setName((String) doc.get("name"));
                producUnit.setBrand((String) doc.get("brand"));
                producUnit.setModel((String) doc.get("model"));
                producUnit.setStock((int) doc.get("stock"));
                producUnit.setDealer_price((double) doc.get("dealer_price"));
                producUnit.setSubtotal((double) doc.get("subtotal"));
                producUnit.setTotal_iva((double) doc.get("total_iva"));
                producUnit.setUnit_profit((double) doc.get("unit_profit"));
                producUnit.setTotal_profit((double) doc.get("total_profit"));
                producUnit.setApply_discount((String) doc.get("apply_discount"));
                producUnit.setDiscount_value((double) doc.get("discount_value"));
                producUnit.setDiscount_price((double) doc.get("discount_price"));
                 
        return producUnit;       
    }

    @Override
    public boolean addProduct(Products products) {
            DecimalFormat df = new DecimalFormat();
            ConnectMongoDB connectionmongodb = new ConnectMongoDB();
            MongoDatabase database = connectionmongodb.connection();
            ConnectMongoDB mongoDBMetodos = new ConnectMongoDB();
            mongoDBMetodos.ConnectionMongo();
            ProductDAO productdao = new ProductDAO();
            MongoCollection<Document> collection = database.getCollection("Products");
            
            Document document = new Document();                     
                document.put("id", products.getId());
                document.put("name", products.getName());
                document.put("brand", products.getBrand());
                document.put("model", products.getModel());
                document.put("stock", products.getStock());
                document.put("dealer_price", products.getDealer_price());
                document.put("subtotal", products.getSubtotal());
                document.put("total_iva", products.getTotal_iva());
                document.put("unit_profit", products.getUnit_profit());
                document.put("total_profit", products.getTotal_profit());
                document.put("apply_discount", products.getApply_discount());
                document.put("discount_value", products.getDiscount_value());
                document.put("apply_discount", products.getApply_discount());
                document.put("discount_price", products.getDiscount_price());
           
            collection.insertOne(document);
                
        return false; 
        
    }

    @Override
    public boolean updateProduct(Products products) {
        DecimalFormat df = new DecimalFormat();
        ConnectMongoDB connectionmongodb = new ConnectMongoDB();
        MongoDatabase database = connectionmongodb.connection();
        MongoCollection collection = database.getCollection("Products");
        Document document = new Document(); 
        ProductDAO productdao = new ProductDAO();
        int id=products.getId();
        Document query = new Document().append("id",  id);
        Bson updates = Updates.combine(                  
                    Updates.set("name", products.getName()),
                    Updates.set("brand", products.getBrand()),
                    Updates.set("model", products.getModel()),
                    Updates.set("stock", products.getStock()),
                    Updates.set("dealer_price", products.getDealer_price()),
                    Updates.set("subtotal", products.getSubtotal()),
                    Updates.set("total_iva", products.getTotal_iva()),
                    Updates.set("unit_profit", products.getUnit_profit()),
                    Updates.set("total_profit", products.getTotal_profit()),
                    Updates.set("apply_discount", products.getApply_discount()),
                    Updates.set("discount_value", products.getDiscount_value()),
                    Updates.set("discount_price", products.getDiscount_price())
            );
                 UpdateOptions options = new UpdateOptions().upsert(true);       
                 UpdateResult result = collection.updateOne(query, updates, options);    
        
        
        return false;
    }
}


