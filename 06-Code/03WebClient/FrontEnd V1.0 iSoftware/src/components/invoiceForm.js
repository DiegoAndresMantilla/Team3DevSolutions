import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";
import "../css/style.css";

const InvoicesForm = () => {
  const [product, setClient] = useState();
  const url = ApiUrl + "listProducts";
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setClient(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  });

  return (
    <div>
      <div class="card-body">
        <div class=" contenedor d-flex flex-row-reverse ">
          <ol class="breadcrumb float-sm-left ">
            <li class="breadcrumb-item">
              <a href="./">Inicio</a>
            </li>
            <li class="breadcrumb-item">
              <a href="./invoicesMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Añadir Facturas</li>
          </ol>
        </div>
        <h3 className="text-center">Facturas</h3>
        <h4 className="text-left">Developer: Ligia Maldonado</h4>
        <div className="col-auto text-center"></div>
      </div>

      <div class="container-fluid content " clear="right">
        <form id="form">
          <div class="card  text-bg-light">
            <div class="card-header">
              <h4 class="card-title">Agregar Facturas</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-3">
                  <label>ID</label>
                  <div class="position-relative">
                    <input
                      type="number"
                      class="form-control"
                      name="ProductId"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-3">
                  <label>ID Usuario</label>
                  <div class="position-relative">
                    <input
                      type="number"
                      class="form-control"
                      name="ProductId"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-3">
                  <label>Fecha</label>
                  <div class="position-relative">
                    <input
                      type="date"
                      class="form-control"
                      name="ProductId"
                      required="requiered"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer ">
              <button
                type="submit"
                value="AddProduct"
                name="accion"
                class="btn btn-success"
              >
                Guardar
              </button>
              <button class="btn">
                <a class=" btn btn-danger" href="./invoicesMenu">
                  Regresar
                </a>
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="control"></div>
    </div>
  );
};

export default InvoicesForm;
