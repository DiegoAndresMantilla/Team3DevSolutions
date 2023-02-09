import React, {useState } from "react";
import "../css/style.css";

function OrderForm() {
  const [order, setOrder] = useState({
    id_order: "",
    id_product: "",
    id_user: "",
    id_invoice: "",
    amount: "",
    total_order: "",
    apply_discount: "",
    discount_value: "",
    discount_price: "",
  });
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://34.125.121.4:3003/iSoftware/addOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
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
        <div class="  d-flex flex-row-reverse ">
          <ol class="breadcrumb float-sm-left ">
            <li class="breadcrumb-item">
              <a href="./principal">Inicio</a>
            </li>
            <li class="breadcrumb-item">
              <a href="./ordersMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Añadir Ordenes</li>
          </ol>
        </div>
        <h3 className="text-center">Ordenes</h3>
        <div className="col-auto text-center"></div>
      </div>

      <div class="container-fluid content " clear="right">
        <form class="row g-3 formulario text-bg-dark " onSubmit={handleSubmit}>
          <h4 class="card-title">Agregar Ordenes</h4>
          <div class="col-md-3">
            <label>ID Orden</label>
            <div class="position-relative">
              <input
                type="text"
                class="form-control"
                name="id_order"
                required="requiered"
                value={order.id_order}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-3">
            <label>ID Products</label>
            <div class="position-relative">
              <input
                type="text"
                class="form-control"
                name="id_product"
                required="requiered"
                value={order.id_product}
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
                value={order.id_user}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-3">
            <label>ID Factura</label>
            <div class="position-relative">
              <input
                type="text"
                class="form-control"
                name="id_invoice"
                required="requiered"
                value={order.id_invoice}
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="col-3">
            <label>Cantidad</label>
            <div class="position-relative">
              <input
                type="number"
                class="form-control"
                name="amount"
                required="requiered"
                value={order.amount}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-3">
            <label>Total</label>
            <div class="position-relative">
              <input
                type="number"
                class="form-control"
                name="total_order"
                required="requiered"
                value={order.total_order}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-3">
            <label>Descuento</label>
            <div class="position-relative">
              <select
                type="text"
                class="form-control"
                name="apply_discount"
                required="requiered"
                value={order.apply_discount}
                onChange={handleChange}
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
                name="discount_value"
                required="requiered"
                value={order.discount_value}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="card-footer ">
            <button
              type="submit"
              class="btn btn-success"
              onClick={handleRefresh} 
            >
              Guardar
            </button>
            <button class="btn">
              <a class=" btn btn-danger" href="./ordersMenu">
                Regresar
              </a>
            </button>
          </div>
        </form>
      </div>
      <div id="control"></div>
    </div>
  );
};

export default OrderForm;
