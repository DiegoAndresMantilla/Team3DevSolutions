import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headboard from "../components/headboard";
import InvoiceForm from "../components/invoiceForm";

export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <InvoiceForm />
      </div>
    );
  }
}
