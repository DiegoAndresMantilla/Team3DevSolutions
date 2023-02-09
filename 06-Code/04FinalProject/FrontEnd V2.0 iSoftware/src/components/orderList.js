import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";
const OrderList = () => {
  const [order, setClient] = useState();
  const url = ApiUrl + "listOrders";
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setClient(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  });

  function deleteOrder(idOrder) {
    fetch(
      `http://34.125.121.4:3003/iSoftware/deleteOrder?id_order=${idOrder}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Order with id " + idOrder + " was deleted!");
      });
  }

  return (
    <div>
      <div class="card-body">
        <div class="  d-flex flex-row-reverse ">
          <ol class="breadcrumb float-sm-left ">
            <li class="breadcrumb-item">
              <a href="./principal">Inicio</a>
            </li>
            <li class="breadcrumb-item">
              <a href="./ordersMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Lista de Ordenes</li>
          </ol>
        </div>
        <h3 className="text-center">Ordenes</h3>
        <div className="col-auto text-center"></div>
      </div>
      <div class="table-responsive">
        <table className="table table-hover table-dark">
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
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {!order
              ? "Loading"
              : order.map((order, index) => {
                  return (
                    <tr className="table-success">
                      <td className="text-center">{order.id_order}</td>
                      <td className="text-center">{order.id_product}</td>
                      <td className="text-center">{order.id_user}</td>
                      <td className="text-center">{order.id_invoice}</td>
                      <td className="text-center">{order.amount}</td>
                      <td className="text-center">{order.total_order}</td>
                      <td className="text-center">{order.apply_discount}</td>
                      <td className="text-center">{order.discount_value}</td>
                      <td className="text-center">{order.discount_price}</td>
                      <td className="text-center">
                        &nbsp;&nbsp;
                        <Link to={`/orderEdit/${order.id_order}`}>
                          <button className="btn btn-primary btn-sm">
                            Editar
                          </button>
                        </Link>
                        &nbsp; &nbsp;
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          onClick={() => {
                            deleteOrder(order.id_order);
                          }}
                          class="btn btn-danger btn-sm"
                        >
                          Borrar
                        </button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
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
