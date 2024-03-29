import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";

const InvoiceList = () => {
  const [invoice, setClient] = useState();
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
              <a href="./invoicesMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Lista de Facturas</li>
          </ol>
        </div>
        <h3 className="text-center">Facturas</h3>
        <h4 className="text-left">Developer: Ligia Maldonado</h4>
        <div className="col-auto text-center"></div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">ID Usuario</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {!invoice
            ? "Loading"
            : invoice.map((invoice, index) => {
                return (
                  <tr className="table-info">
                    <td className="text-center">{invoice.id_invoice}</td>
                    <td className="text-center">{invoice.id_user}</td>
                    <td className="text-center">{invoice.date}</td>
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
        <a href="./invoicesMenu" class="btn btn-danger">
          <span class="icon-house"></span>Regresar
        </a>
      </div>
    </div>
  );
};

export default InvoiceList;
