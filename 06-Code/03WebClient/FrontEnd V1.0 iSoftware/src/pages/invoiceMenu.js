import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headboard from "../components/headboard";
import MenuInvoce from "../components/invoiceMenu";

export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <MenuInvoce />
      </div>
    );
  }
}
