import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cabecera from "../components/cabecera";
import MenuInvoce from "../components/invoiceMenu"



export default class usuarios extends Component {


  render() {
    return (
      <div>
        <Cabecera />
        <MenuInvoce/>
        
      </div>
    );
  }
}