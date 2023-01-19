import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";
import "../css/style.css";

const ProductList = () => {
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
            <li class="breadcrumb-item active">Lista de Prodcutos</li>
          </ol>
        </div>
        <h3 className="text-center">Productos</h3>
        <h4 className="text-left">Developer: Erick Maldonado</h4>
        <div className="col-auto text-center"></div>
      </div>

      <table className="table table-dark table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio Distribuidor</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Total iva</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Ganancia</th>
          </tr>
        </thead>
        <tbody>
          {!product
            ? "Loading"
            : product.map((product, index) => {
                return (
                  <tr className="table-success">
                    <td className="text-center">{product.id_product}</td>
                    <td className="text-center">{product.name_product}</td>
                    <td className="text-center">{product.brand}</td>
                    <td className="text-center">{product.model}</td>
                    <td className="text-center">{product.stock}</td>
                    <td className="text-center">{product.dealerPrice}</td>
                    <td className="text-center">{product.subtotal}</td>
                    <td className="text-center">{product.total_iva}</td>
                    <td className="text-center">{product.unit_profit}</td>
                    <td className="text-center">{product.total_profit}</td>
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
        <a href="./productsMenu" class="btn btn-danger btn-lg">
          <span class="icon-house"></span>Regresar
        </a>
      </div>
    </div>
  );
};

export default ProductList;
