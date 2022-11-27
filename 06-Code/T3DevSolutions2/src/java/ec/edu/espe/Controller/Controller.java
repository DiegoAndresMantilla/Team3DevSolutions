/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.Controller;

import ec.edu.espe.Model.Products;
import ec.edu.espe.Model.Users;
import ec.edu.espe.ProductDAO.ProductDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Esteban
 */
public class Controller extends HttpServlet {
    String addProduct = "Jsps/addProducts.jsp";
    String updateProduct="Jsps/updateProducts.jsp";
    Products product = new Products();
    Users user = new Users();
    ProductDAO productdao = new ProductDAO();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Controller</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Controller at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String access = "";
        String acction = request.getParameter("accion");
        switch(acction){
            case "addProducts":{
                access = addProduct;
            }
            break;
            case"AddProduct":{               
                int id = Integer.parseInt(request.getParameter("ProductId")) ;
                String name = request.getParameter("ProductName");
                String brand = request.getParameter("ProductBrand");
                String model= request.getParameter("ProductModel");
                int stock = Integer.parseInt(request.getParameter("ProductStock")) ;
                double dealer_price = Double.parseDouble(request.getParameter("ProductDealerPrice"));
                double subtotal = Double.parseDouble(request.getParameter("ProductSubTotal"));
                String apply_discount = request.getParameter("ProductApplyDiscount");       
                double discount_value = Double.parseDouble(request.getParameter("ProductDiscountValue"));

                /*Business Rules*/
                double unit_profit= productdao.calculateUnitProfit(subtotal, dealer_price);
                double total_iva = productdao.calculateIva(subtotal);
                double total_profit= productdao.calculateTotalProfit(unit_profit, stock);
                double discount_price = productdao.calculateDiscountPrice(total_iva, discount_value);
                
                Products productos = new Products (id,name,brand, model ,stock,dealer_price,subtotal,total_iva,
                unit_profit,total_profit,apply_discount,discount_value,discount_price);
        
                productdao.addProduct(productos);
            }
            break;
             case "updateProducts":{
                access = updateProduct;
            }
            break;
            case "UpdateProduct":{
                int id = Integer.parseInt(request.getParameter("ProductId")) ;
                String name = request.getParameter("ProductName");
                String brand = request.getParameter("ProductBrand");
                String model= request.getParameter("ProductModel");
                int stock = Integer.parseInt(request.getParameter("ProductStock")) ;
                double dealer_price = Double.parseDouble(request.getParameter("ProductDealerPrice"));
                double subtotal = Double.parseDouble(request.getParameter("ProductSubTotal"));
                String apply_discount = request.getParameter("ProductApplyDiscount");       
                double discount_value = Double.parseDouble(request.getParameter("ProductDiscountValue"));

                /*Business Rules*/
                double unit_profit= productdao.calculateUnitProfit(subtotal, dealer_price);
                double total_iva = productdao.calculateIva(subtotal);
                double total_profit= productdao.calculateTotalProfit(unit_profit, stock);
                double discount_price = productdao.calculateDiscountPrice(total_iva, discount_value);
                
                Products productos = new Products (id,name,brand, model ,stock,dealer_price,subtotal,total_iva,
                unit_profit,total_profit,apply_discount,discount_value,discount_price);
        
                productdao.updateProduct(productos);
            }
            break;
            
            case "RemoveProduct":{
                int id = Integer.parseInt(request.getParameter("id"));
                productdao.deleteProduct(id); 
            }
            break;
        }
        RequestDispatcher view = request.getRequestDispatcher(access);
        view.forward(request, response);
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

   
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
