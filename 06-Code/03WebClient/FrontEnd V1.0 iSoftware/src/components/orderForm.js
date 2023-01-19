import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";
import "../css/style.css";

const OrderForm = () => {
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
              <a href="./ordersMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Añadir Ordenes</li>
          </ol>
        </div>
        <h3 className="text-center">Ordenes</h3>
        <h4 className="text-left">Developer: Diego Mantilla</h4>
        <div className="col-auto text-center"></div>
      </div>

      <div class="container-fluid content " clear="right">
        <form id="form">
          <div class="card  text-bg-light">
            <div class="card-header">
              <h4 class="card-title">Agregar Ordenes</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-3">
                  <label>ID Orden</label>
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
                  <label>ID Products</label>
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
                  <label>ID Factura</label>
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
                  <label>Cantidad</label>
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
                  <label>Total</label>
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
                  <label>Descuento</label>
                  <div class="position-relative">
                    <select
                      type="text"
                      class="form-control"
                      name="ProductApplyDiscount"
                      required="requiered"
                    >
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div class="col-2">
                  <label>Valor</label>
                  <div class="position-relative">
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      name="ProductDiscountValue"
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
                <a class=" btn btn-danger" href="./ordersMenu">
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

export default OrderForm;
