import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "../components/productList";
import Headboard from "../components/headboard";

export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <ProductsList/>
      </div>
    );
  }
}
