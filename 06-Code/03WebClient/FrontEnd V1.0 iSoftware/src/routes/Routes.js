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
import Login from "../pages/Login";

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
        <Route exact path="/productsMenu" element={<MenuProducts />} />
        <Route exact path="/orders" element={<ListOrders />} />
        <Route exact path="/ordersMenu" element={<MenuOrders />} />
        <Route exact path="/productsForm" element={<FormProducts />} />
        <Route exact path="/usersForm" element={<FormUsers />} />
        <Route exact path="/invoicesForm" element={<FormInvoices />} />
        <Route exact path="/ordersForm" element={<FormOrders />} />
      </Routes>
    </Router>
  );
}

export default App;
