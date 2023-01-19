import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";
import "../css/style.css";

const ProductForm = () => {
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
              <a href="./productsMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Añadir Prodcutos</li>
          </ol>
        </div>
        <h3 className="text-center">Productos</h3>
        <h4 className="text-left">Developer: Erick Maldonado</h4>
        <div className="col-auto text-center"></div>
      </div>

      <div class="container-fluid content " clear="right">
        <form id="form">
          <div class="card  text-bg-light">
            <div class="card-header">
              <h4 class="card-title">Agregar Productos</h4>
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
                  <label>Nombre</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      name="ProductName"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-3">
                  <label>Marca</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control "
                      name="ProductBrand"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-3">
                  <label>Modelo</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      name="ProductModel"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-1">
                  <label>Stock</label>
                  <div class="position-relative">
                    <input
                      type="number"
                      class="form-control"
                      name="ProductStock"
                      required="requiered"
                    />
                  </div>
                </div>
                <div class="col-3">
                  <label>Precio Distribuidor</label>
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
                <div class="col-1">
                  <label>Sub Total</label>
                  <div class="position-relative">
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      name="ProductSubTotal"
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
                <a class=" btn btn-danger" href="./productsMenu">
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

export default ProductForm;
