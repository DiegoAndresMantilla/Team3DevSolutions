import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const orderMenu = () => {
  return (
    <div className="container">
      <div class=" d-flex flex-row-reverse ">
        <ol class="breadcrumb float-sm-left ">
          <li class="breadcrumb-item">
            <a href="./principal">Inicio</a>
          </li>
          <li class="breadcrumb-item active">Menú</li>
        </ol>
      </div>
      <body>
        <h2 className="centrar-texto margin-text">Ordenes</h2>
        <div className="d-flex justify-content-evenly row">
          <div className="col-lg-4 col-6">
            <div class="card text-bg-secondary mb-3">
              <a href="./orders" class="btn btn-secondary">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Lista</h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-clipboard-list"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                      <rect x="9" y="3" width="6" height="4" rx="2" />
                      <line x1="9" y1="12" x2="9.01" y2="12" />
                      <line x1="13" y1="12" x2="15" y2="12" />
                      <line x1="9" y1="16" x2="9.01" y2="16" />
                      <line x1="13" y1="16" x2="15" y2="16" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-6">
            <div class="card text-bg-dark mb-3">
              <a href="./ordersForm" class="btn btn-dark">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Añadir</h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-circle-plus"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="9" y1="12" x2="15" y2="12" />
                      <line x1="12" y1="9" x2="12" y2="15" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly row">
          <div class="col-lg-9">
            <a href="./principal" class="btn btn-danger btn-lg">
              <span class="icon-house"></span>Regresar
            </a>
          </div>
        </div>
      </body>
    </div>
  );
};

export default orderMenu;
