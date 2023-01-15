import React, { Component, useEffect, useState } from "react";
import Cabecera from "../components/cabecera";
import Menu from "../components/menu"
import "bootstrap/dist/css/bootstrap.min.css";

export default class principal extends Component {
  

  render() {
    return (
      <div>
      <div>
        <Cabecera/>
        <Menu/>
      </div>
      </div>

    );
  }
}
