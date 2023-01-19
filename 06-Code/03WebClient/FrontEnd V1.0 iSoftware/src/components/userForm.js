import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";
import "../css/style.css";

const UserForm = () => {
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
              <a href="./usersMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Añadir Usuarios</li>
          </ol>
        </div>
        <h3 className="text-center">Usuario</h3>
        <h4 className="text-left">Developer: Mateo Loachamin</h4>
        <div className="col-auto text-center"></div>
      </div>

      <div class="container-fluid content " clear="right">
        <form id="form">
          <div class="card  text-bg-light">
            <div class="card-header">
              <h4 class="card-title">Agregar Usuarios</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-2">
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
                <div class="col-2">
                  <label>Cédula</label>
                  <div class="position-relative">
                    <input
                      type="number"
                      class="form-control"
                      name="ProductStock"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <label>Nombre</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control "
                      name="ProductBrand"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <label>Apellido</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      name="ProductModel"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-3">
                  <label>Dirección</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      name="ProductModel"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-3">
                  <label>Teléfono</label>
                  <div class="position-relative">
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      name="ProductDealerPrice"
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
                <a class=" btn btn-danger" href="./usersMenu">
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

export default UserForm;
