import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InvoicesList from "../components/invoiceList";
import Headboard from "../components/headboard";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default class usuarios extends Component {
  componentWillMount() {
    if (!cookies.get("id")) {
      window.location.href = "./";
    }
  }
  render() {
    return (
      <div>
        <Headboard />
        <InvoicesList />
      </div>
    );
  }
}
