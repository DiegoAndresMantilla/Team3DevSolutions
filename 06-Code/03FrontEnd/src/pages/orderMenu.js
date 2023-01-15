import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cabecera from "../components/cabecera";
import MenuOrder from "../components/orderMenu"



export default class usuarios extends Component {


  render() {
    return (
      <div>
        <Cabecera />
        <MenuOrder/>
        
      </div>
    );
  }
}