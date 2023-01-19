import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headboard from "../components/headboard";
import OrderForm from "../components/orderForm";

export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <OrderForm />
      </div>
    );
  }
}
