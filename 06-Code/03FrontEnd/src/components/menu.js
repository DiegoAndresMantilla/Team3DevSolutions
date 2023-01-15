import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

const menu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 ">
          <a href="#" className="button aqua medium radius">
            <span class="icon-house"></span>PRODUCTS
          </a>
        </div>
        <div className="col-md-3  ">
          <a href="#" className="button green medium radius">
            <span class="icon-house"></span>USERS
          </a>
        </div>
        <div className="col-md-3 ">
          <a href="./ordersMenu" className="button yellow medium radius">
            <span class="icon-house"></span>ORDERS
          </a>
        </div>
        <div className="col-md-3 ">
          <a href="./invoicesMenu" className="button red medium radius">
            <span class="icon-house"></span>INVOICE
          </a>
        </div>
      </div>
    </div>
  );
};

export default menu;
