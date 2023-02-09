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

  function deleteInvoice(idInvoice) {
    fetch(
      `http://34.125.121.4:3003/iSoftware/deleteInvoice?id_invoice=${idInvoice}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Invoice with id " + idInvoice + " was deleted!");
      });
  }

  return (
    <div>
      <div class="card-body">
        <div class="d-flex flex-row-reverse ">
          <ol class="breadcrumb float-sm-left ">
            <li class="breadcrumb-item">
              <a href="./principal">Inicio</a>
            </li>
            <li class="breadcrumb-item">
              <a href="./invoicesMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Lista de Facturas</li>
          </ol>
        </div>
        <h3 className="text-center">Facturas</h3>
        <div className="col-auto text-center"></div>
      </div>
      <div class="table-responsive">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">ID Usuario</th>
              <th scope="col">Fecha</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Iva 12%</th>
              <th scope="col">Iva 10%</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {!invoice
              ? "Loading"
              : invoice.map((invoice, index) => {
                  return (
                    <tr className="table-success">
                      <td className="text-center">{invoice.id_invoice}</td>
                      <td className="text-center">{invoice.id_user}</td>
                      <td className="text-center">{invoice.date}</td>
                      <td className="text-center">{invoice.subtotal}</td>
                      <td className="text-center">{invoice.iva_twelve}</td>
                      <td className="text-center">{invoice.iva_ten}</td>
                      <td className="text-center">
                        &nbsp;&nbsp;
                        <Link to={`/invoicesEdit/${invoice.id_invoice}`}>
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
                            deleteInvoice(invoice.id_invoice);
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
        <a href="./invoicesMenu" class="btn btn-danger btn-lg">
          <span class="icon-house"></span>Regresar
        </a>
      </div>
    </div>
  );
};

export default InvoiceList;
