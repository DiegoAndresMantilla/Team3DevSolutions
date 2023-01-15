import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

const orderMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 ">
          
        </div>
        <div className="col-md-3 ">
          <a href="./orders" className="button blue medium radius">
            <span class="icon-house"></span>ORDER LIST
          </a>
        </div>
        <div className="col-md-3 ">
          <a href="#" className="button red medium radius">
            <span class="icon-house"></span>ADD ORDERS
          </a>
        </div>
        <div className="col-md-3 ">
          
        </div>
      </div>
    </div>
  );
};

export default orderMenu;
