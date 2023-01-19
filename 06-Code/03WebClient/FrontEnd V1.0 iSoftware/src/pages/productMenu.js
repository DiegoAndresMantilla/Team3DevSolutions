import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headboard from "../components/headboard";
import MenuProduct from "../components/productMenu";

export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <MenuProduct />
      </div>
    );
  }
}
