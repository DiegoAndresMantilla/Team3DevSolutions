import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OrdersList from "../components/orderList";
import Cabecera from "../components/cabecera";



export default class usuarios extends Component {


  render() {
    return (
      <div>
        <Cabecera />
        <OrdersList />
        
      </div>
    );
  }
}