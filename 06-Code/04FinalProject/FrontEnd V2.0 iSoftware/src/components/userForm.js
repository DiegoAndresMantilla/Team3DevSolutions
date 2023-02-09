import React, { useState } from "react";
import "../css/style.css";
import {Link} from 'react-router-dom'
  function UserForm() {
    const [product, setProduct] = useState({
      id_user: "",
      identification: "",
      name_user: "",
      lastname_user: "",
      address: "",
      phone: "",
      password: "",
    });
    const handleRefresh = () => {
      window.location.reload();
    };
    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(
          "http://34.125.121.4:3003/iSoftware/addUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
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
          <form class="row g-3 formulario text-bg-dark" onSubmit={handleSubmit}>
            <h4 class="card-title ">Agregar Usuario</h4>
            <div class="col-md-2">
              <label>ID</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  name="id_user"
                  required="requiered"
                  value={product.id_user}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-md-3">
              <label>Cédula</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  name="identification"
                  required="requiered"
                  value={product.identification}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-md-3">
              <label>Nombre</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control "
                  name="name_user"
                  required="requiered"
                  value={product.name_user}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-md-3">
              <label>Apellido</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  name="lastname_user"
                  required="requiered"
                  value={product.lastname_user}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-md-3">
              <label>Dirección</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  name="address"
                  required="requiered"
                  value={product.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-md-3">
              <label>Teléfono</label>
              <div class="position-relative">
                <input
                  type="number"
                  class="form-control"
                  name="phone"
                  required="requiered"
                  value={product.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-md-3">
              <label>Contraseña</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  name="password"
                  required="requiered"
                  value={product.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-12">
              <button
                type="submit"
                class="btn btn-success"
                onClick={handleRefresh}
              >
                Guardar
              </button>
              <button class="btn">
                <a class=" btn btn-danger" href="./usersMenu">
                  Regresar
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

export default UserForm;
