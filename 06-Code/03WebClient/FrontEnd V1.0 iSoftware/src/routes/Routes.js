import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Principal from '../pages/principal';
import ListInvoices from '../pages/invoices'
import MenuInvoices from '../pages/invoiceMenu'
import ListOrders from '../pages/orders'
import MenuOrders from '../pages/orderMenu'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Principal/>} />
        <Route exact path='/orders' element={<ListOrders/>} />
        <Route exact path='/ordersMenu' element={<MenuOrders/>} />
        <Route exact path='/invoices' element={<ListInvoices/>} />
        <Route exact path='/invoicesMenu' element={<MenuInvoices/>} />
    </Routes>
    </Router>
  );
}

export default App;
