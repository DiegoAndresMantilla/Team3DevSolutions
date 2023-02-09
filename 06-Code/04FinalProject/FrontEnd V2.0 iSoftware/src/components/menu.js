import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { logOut } from "./logOut";
const menu = () => {
  return (
    <div className="container">
      <div class="card-body">
        <div class="d-flex flex-row-reverse ">
          <ol class="breadcrumb float-sm-left ">
            <li class="breadcrumb-item">
              <button
                type="submit"
                value="AddProduct"
                name="accion"
                class="btn btn-danger btn-sm"
                onClick={() => logOut()}
              >
                Cerrar Sesión
              </button>
            </li>
          </ol>
        </div>
        <div className="col-auto text-center"></div>
      </div>
      <br></br>
      <div className="d-flex justify-content-evenly row">
        <div className="col-lg-3 col-6">
          <div class="card text-bg-info  mb-3">
            <a href="./productsMenu" class="btn btn-info">
              <div class="card-body">
                <div className="">
                  <h5 class="card-title">Productos </h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shopping-cart-plus"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                  </svg>
                </div>
                Ver
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div class="card text-bg-success mb-3">
            <a href="./usersMenu" class="btn btn-success">
              <div class="card-body">
                <div>
                  <h5 class="card-title">Usuarios</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-users"
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
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                </div>
                Ver
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
                <div>
                  <h5 class="card-title">Facturas</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-file-report"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="17" cy="17" r="4" />
                    <path d="M17 13v4h4" />
                    <path d="M12 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4" />
                  </svg>
                </div>
                Ver
              </div>
            </a>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div class="card text-bg-danger mb-3">
            <a href="./ordersMenu" class="btn btn-danger">
              <div class="card-body">
                <div>
                  <h5 class="card-title">Ordenes</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-truck-return"
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
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                    <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />
                    <line x1="9" y1="17" x2="15" y2="17" />
                    <path d="M13 6h5l3 5v6h-2" />
                  </svg>
                </div>
                <span class="icon-house"></span>Ver
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly row">
        <div className="col-lg-3 col-6">
          <div class="card text-bg-dark mb-3">
            <a href="./distributorsMenu" class="btn btn-dark">
              <div class="card-body">
                <div>
                  <h5 class="card-title">Distribuidores</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-truck"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                    <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                  </svg>
                </div>
                Ver
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
