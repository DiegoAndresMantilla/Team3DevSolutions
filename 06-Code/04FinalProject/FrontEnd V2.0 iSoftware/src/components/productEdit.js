import React, { useState } from "react";
import "../css/style.css";

function ProductEdit() {
  const [product, setProduct] = useState({
    id_product: "",
    name_product: "",
    brand: "",
    model: "",
    stock: "",
    dealerPrice: "",
    subtotal: "",
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
        "http://34.125.121.4:3003/iSoftware/addProduct",
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
            <li class="breadcrumb-item active">Añadir Prodcutos</li>
          </ol>
        </div>
        <h3 className="text-center">Productos</h3>
        <div className="col-auto text-center"></div>
      </div>

      <div class="container-fluid content" clear="right">
        <form class="row g-3 formulario text-bg-dark" onSubmit={handleSubmit}>
          <h4 class="card-title ">Agregar Productos</h4>
          <div class="col-md-2">
            <label>ID</label>
            <div class="position-relative">
              <input
                type="text"
                class="form-control"
                name="id_product"
                required="requiered"
                value={product.id_product}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Nombre</label>
            <div class="position-relative">
              <input
                type="text"
                class="form-control"
                name="name_product"
                required="requiered"
                value={product.name_product}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Marca</label>
            <div class="position-relative">
              <input
                type="text"
                class="form-control "
                name="brand"
                required="requiered"
                value={product.brand}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Modelo</label>
            <div class="position-relative">
              <input
                type="text"
                class="form-control"
                name="model"
                required="requiered"
                value={product.model}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Stock</label>
            <div class="position-relative">
              <input
                type="number"
                class="form-control"
                name="stock"
                required="requiered"
                value={product.stock}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Precio Distribuidor</label>
            <div class="position-relative">
              <input
                type="number"
                step="any"
                class="form-control"
                name="dealerPrice"
                required="requiered"
                value={product.dealerPrice}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-md-3">
            <label>Sub Total</label>
            <div class="position-relative">
              <input
                type="number"
                step="any"
                class="form-control"
                name="subtotal"
                id="subtotal"
                required="requiered"
                value={product.subtotal}
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
              <a class=" btn btn-danger" href="/productsMenu">
                Regresar
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductEdit;
