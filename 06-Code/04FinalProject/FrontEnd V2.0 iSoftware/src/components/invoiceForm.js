import React, { useState } from "react";
import "../css/style.css";

function InvoiceForm() {
  const [invoice, setInvoice] = useState({
    id_invoice: "",
    id_user: "",
    date: "",
    subtotal: "",
  });

  const handleChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://34.125.121.4:3003/iSoftware/addInvoice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(invoice),
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
        <div class=" contenedor d-flex flex-row-reverse ">
          <ol class="breadcrumb float-sm-left ">
            <li class="breadcrumb-item">
              <a href="./principal">Inicio</a>
            </li>
            <li class="breadcrumb-item">
              <a href="./invoicesMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Añadir Facturas</li>
          </ol>
        </div>
        <h3 className="text-center">Facturas</h3>
        <div className="col-auto text-center"></div>
      </div>

      <div class="container-fluid content " clear="right">
        <form class="row g-3 formulario text-bg-dark" onSubmit={handleSubmit}>
          <h4 class="card-title">Agregar Facturas</h4>
          <div class="col-3">
            <label>ID</label>
            <div class="position-relative">
              <input
                type="text"
                class="form-control"
                name="id_invoice"
                required="requiered"
                value={invoice.id_invoice}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-3">
            <label>ID Usuario</label>
            <div class="position-relative">
              <input
                type="text"
                class="form-control"
                name="id_user"
                required="requiered"
                value={invoice.id_user}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-3">
            <label>Fecha</label>
            <div class="position-relative">
              <input
                type="date"
                class="form-control"
                name="date"
                required="requiered"
                value={invoice.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-3">
            <label>Sub Total</label>
            <div class="position-relative">
              <input
                type="number"
                class="form-control"
                name="subtotal"
                required="requiered"
                value={invoice.subtotal}
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
              <a class=" btn btn-danger" href="./invoicesMenu">
                Regresar
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InvoiceForm;
