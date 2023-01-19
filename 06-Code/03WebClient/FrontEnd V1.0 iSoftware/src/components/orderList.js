import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [order, setClient] = useState();
  const url = ApiUrl + "listInvoices";
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
            <li class="breadcrumb-item active">Lista de Ordenes</li>
          </ol>
        </div>
        <h3 className="text-center">Ordenes</h3>
        <h4 className="text-left">Developer: Diego Mantilla</h4>
        <div className="col-auto text-center"></div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">ID Orden</th>
            <th scope="col">ID Producto</th>
            <th scope="col">ID Usuario</th>
            <th scope="col">ID Factura</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
            <th scope="col">Descuento</th>
            <th scope="col">Valor</th>
            <th scope="col">Precio con Descuento</th>
          </tr>
        </thead>
        <tbody>
          {!order
            ? "Loading"
            : order.map((order, index) => {
                return (
                  <tr className="table-info">
                    <td className="text-center">{order.id_order}</td>
                    <td className="text-center">{order.id_product}</td>
                    <td className="text-center">{order.id_user}</td>
                    <td className="text-center">{order.id_invoice}</td>
                    <td className="text-center">{order.amount}</td>
                    <td className="text-center">{order.total_order}</td>
                    <td className="text-center">{order.apply_discount}</td>
                    <td className="text-center">{order.discount_value}</td>
                    <td className="text-center">{order.discount_price}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="control"></div>
      <div class="izquierda">
        <a href="./ordersMenu" class="btn btn-danger btn-lg">
          <span class="icon-house"></span>Regresar
        </a>
      </div>
    </div>
  );
};

export default OrderList;
