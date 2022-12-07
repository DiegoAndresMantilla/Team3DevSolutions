
package ec.edu.espe.Model;


public class Products {
    private int id;
    private String name;
    private String brand;
    private String model; 
    private int stock;
    private double dealer_price ;
    private double subtotal;
    private double total_iva;
    private double unit_profit;
    private double total_profit;
    private String apply_discount;
    private double discount_value;
    private double discount_price;

    public Products(int id, String name, String brand, String model, int stock, double dealer_price, double subtotal, double total_iva, double unit_profit, double total_profit, String apply_discount, double discount_value, double discount_price) {
        this.id=id;
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.stock = stock;
        this.dealer_price = dealer_price;
        this.subtotal = subtotal;
        this.total_iva = total_iva;
        this.unit_profit = unit_profit;
        this.total_profit = total_profit;
        this.apply_discount = apply_discount;
        this.discount_value = discount_value;
        this.discount_price = discount_price;
    }

   

    public Products (){
        
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public double getDealer_price() {
        return dealer_price;
    }

    public void setDealer_price(double dealer_price) {
        this.dealer_price = dealer_price;
    }

    public double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(double subtotal) {
        this.subtotal = subtotal;
    }

    public double getTotal_iva() {
        return total_iva;
    }

    public void setTotal_iva(double total_iva) {
        this.total_iva = total_iva;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getUnit_profit() {
        return unit_profit;
    }

    public void setUnit_profit(double unit_profit) {
        this.unit_profit = unit_profit;
    }

    public double getTotal_profit() {
        return total_profit;
    }

    public void setTotal_profit(double total_profit) {
        this.total_profit = total_profit;
    }

    public String getApply_discount() {
        return apply_discount;
    }

    public void setApply_discount(String apply_discount) {
        this.apply_discount = apply_discount;
    }

    public double getDiscount_price() {
        return discount_price;
    }

    public void setDiscount_price(double discount_price) {
        this.discount_price = discount_price;
    }

    public double getDiscount_value() {
        return discount_value;
    }

    public void setDiscount_value(double discount_value) {
        this.discount_value = discount_value;
    }
    
    
}
