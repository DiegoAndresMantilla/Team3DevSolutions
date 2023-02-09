import React, { useEffect, useState } from "react";
import "../css/style.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { ApiUrl } from "../services/apiServices";

const UserEdit = (props) => {
  
  return (
    <div>
      <div class="card-body">
        <div class="  d-flex flex-row-reverse">
          <ol class="breadcrumb float-sm-left ">
            <li class="breadcrumb-item">
              <a href="./principal">Inicio</a>
            </li>
            <li class="breadcrumb-item">
              <a href="./productsMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Añadir Usuario</li>
          </ol>
        </div>
        <h3 className="text-center">Usuario</h3>
        <div className="col-auto text-center"></div>
      </div>

      <div class="container-fluid content" clear="right">
        <form class="row g-3 formulario text-bg-dark">
          <h4 class="card-title ">Agregar Usuario</h4>
          <div class="col-md-2">
            <label>ID</label>
            <div class="position-relative">
              <input
                type="text"
                className="form-control"
                id="id_user"
                name="id_user"
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Cédula</label>
            <div class="position-relative">
              <input
                type="text"
                className="form-control"
                id="identification"
                name="identification"
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Nombre</label>
            <div class="position-relative">
              <input
                type="text"
                className="form-control"
                id="name_user"
                name="name_user"
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Apellido</label>
            <div class="position-relative">
              <input
                type="text"
                className="form-control"
                id="lastname_user"
                name="lastname_user"
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Dirección</label>
            <div class="position-relative">
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Teléfono</label>
            <div class="position-relative">
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Contraseña</label>
            <div class="position-relative">
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
          </div>
          <div class="col-12">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button class="btn">
              <a class=" btn btn-danger" href="/usersMenu">
                Regresar
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
