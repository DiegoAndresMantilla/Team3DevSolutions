import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "../pages/principal";
import ListInvoices from "../pages/invoices";
import MenuInvoices from "../pages/invoiceMenu";
import ListUsers from "../pages/users";
import MenuUsers from "../pages/userMenu";
import ListProducts from "../pages/products";
import MenuProducts from "../pages/productMenu";
import ListOrders from "../pages/orders";
import MenuOrders from "../pages/orderMenu";
import FormProducts from "../pages/productForm";
import FormUsers from "../pages/userForm";
import FormInvoices from "../pages/invoiceForm";
import FormOrders from "../pages/orderForm";
import FormDistributors from "../pages/distributorForm";
import Login from "../pages/Login";
import ListDistributors from "../pages/distributors";
import MenuDistributors from "../pages/distributorMenu";
import EditDistributor from "../pages/distributorEdit";
import EditInvoice from "../pages/invoicesEdit";
import EditOrder from "../pages/orderEdit";
import EditProduct from "../pages/productEdit";
import EditUser from "../pages/userEdit";
import DeleteProduct from "../pages/productDelete";


function App() {
  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<Login />} />
        <Route exact path="/principal" element={<Principal />} />
        <Route exact path="/invoices" element={<ListInvoices />} />
        <Route exact path="/invoicesMenu" element={<MenuInvoices />} />
        <Route exact path="/users" element={<ListUsers />} />
        <Route exact path="/usersMenu" element={<MenuUsers />} />
        <Route exact path="/products" element={<ListProducts />} />
        <Route exact path="/productsDelete" element={<DeleteProduct />} />
        <Route exact path="/productsMenu" element={<MenuProducts />} />
        <Route exact path="/orders" element={<ListOrders />} />
        <Route exact path="/ordersMenu" element={<MenuOrders />} />
        <Route exact path="/productsForm" element={<FormProducts />} />
        <Route exact path="/usersForm" element={<FormUsers />} />
        <Route exact path="/invoicesForm" element={<FormInvoices />} />
        <Route exact path="/ordersForm" element={<FormOrders />} />
        <Route exact path="/distributorsForm" element={<FormDistributors />} />
        <Route exact path="/distributorsMenu" element={<MenuDistributors />} />
        <Route exact path="/distributors" element={<ListDistributors />} />
        <Route exact path="/distributorEdit/:id_distributor" element={<EditDistributor />} />
        <Route exact path="/invoicesEdit/:id_invoice" element={<EditInvoice />} />
        <Route exact path="/orderEdit/:id_order" element={<EditOrder />} />
        <Route exact path="/productEdit/:id_product" element={<EditProduct />} />
        <Route exact path="/userEdit/:id_user" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
