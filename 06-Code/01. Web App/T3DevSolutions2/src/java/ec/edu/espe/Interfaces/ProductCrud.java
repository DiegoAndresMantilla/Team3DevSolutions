
package ec.edu.espe.Interfaces;

import com.mongodb.DB;
import ec.edu.espe.Model.Products;
import java.util.List;


public interface ProductCrud {
    public Products listProduct(int ident);
    public boolean deleteProduct(int ident); 
    public boolean addProduct(Products products);
    public boolean updateProduct(Products products);
    /*Business Rules*/
    public float calculateIva(double subtotal);
    public float calculateUnitProfit(double subtotal, double dealer_price );
    public float calculateTotalProfit(double unit_profit, int stock );
    public float calculateDiscountPrice(double total_iva, double discount_value );
}
