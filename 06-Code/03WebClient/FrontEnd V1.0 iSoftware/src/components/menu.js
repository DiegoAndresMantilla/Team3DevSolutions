import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

const menu = () => {
  return (
    <div className="container ">
      <br></br>
      <div className=" d-flex justify-content-evenly row ">
        <div className="col-lg-3 col-6 ">
          <div class="card text-bg-info  mb-3">
            <a href="./productsMenu" class="btn btn-info">
              <div class="card-body">
                <h5 class="card-title">Productos</h5>
                <span class="icon-house"></span>Ver
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div class="card text-bg-success mb-3">
            <a href="./usersMenu" class="btn btn-success">
              <div class="card-body">
                <h5 class="card-title">Usuarios</h5>
                <span class="icon-house"></span>Ver
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly row">
        <div className="col-lg-3 col-6">
          <div class="card text-bg-warning mb-3">
            <a href="./invoicesMenu" class="btn btn-warning">
              <div class="card-body">
                <h5 class="card-title">Facturas</h5>
                <span class="icon-house"></span>Ver
              </div>
            </a>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div class="card text-bg-danger mb-3">
            <a href="./ordersMenu" class="btn btn-danger">
              <div class="card-body">
                <h5 class="card-title">Ordenes</h5>
                <span class="icon-house"></span>Ver
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
