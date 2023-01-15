import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InvoicesList from "../components/invoiceList";
import Cabecera from "../components/cabecera";



export default class usuarios extends Component {


  render() {
    return (
      <div>
        <Cabecera />
        <InvoicesList />
        
      </div>
    );
  }
}
