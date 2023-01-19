import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OrdersList from "../components/orderList";
import Headboard from "../components/headboard";

export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <OrdersList />
      </div>
    );
  }
}