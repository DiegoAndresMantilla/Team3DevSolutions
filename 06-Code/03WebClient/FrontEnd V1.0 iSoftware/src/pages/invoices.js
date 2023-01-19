import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InvoicesList from "../components/invoiceList";
import Headboard from "../components/headboard";

export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <InvoicesList />
      </div>
    );
  }
}
