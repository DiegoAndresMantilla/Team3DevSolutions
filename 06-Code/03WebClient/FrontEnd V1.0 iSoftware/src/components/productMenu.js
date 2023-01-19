import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

const productMenu = () => {
  return (
    <div className="contenedor">
      <div class=" d-flex flex-row-reverse ">
        <ol class="breadcrumb float-sm-left ">
          <li class="breadcrumb-item">
            <a href="./">Inicio</a>
          </li>
          <li class="breadcrumb-item active">Menú</li>
        </ol>
      </div>
      <div className="container-space">
        <br></br>
        <div className=" row">
          <div className="col-md-3">
            <div class="card text-bg-secondary">
              <a href="./products" class="btn btn-secondary">
                <div class="card-body">
                  <h5 class="card-title">Lista</h5>
                  <span class="icon-house"></span>Ver
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-3 ">
            <div class="card text-bg-dark">
              <a href="./productsForm" class="btn btn-dark">
                <div class="card-body">
                  <h5 class="card-title">Añadir</h5>
                  <span class="icon-house"></span>Ver
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="izquierda">
          <a href="./" class="btn btn-danger btn-lg">
            <span class="icon-house"></span>Regresar
          </a>
        </div>
      </div>
    </div>
  );
};

export default productMenu;
