import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import "../css/style.css";
import { Link } from "react-router-dom";
const ProductDelete = () => {
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

  function deleteProduct(idProduct) {
    fetch(
      `http://34.125.121.4:3003/iSoftware/deleteProduct?id_product=${idProduct}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Product with id " + idProduct + " was deleted!");
      });
  }

  return (
    <div>
      <div class="card-body">
        <div class=" d-flex flex-row-reverse ">
          <ol class="breadcrumb float-sm-left ">
            <li class="breadcrumb-item">
              <a href="./principal">Inicio</a>
            </li>
            <li class="breadcrumb-item">
              <a href="./productsMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Lista de Prodcutos</li>
          </ol>
        </div>
        <h3 className="text-center">Productos</h3>
        <div className="col-auto text-center"></div>
      </div>
      <div class="table-responsive">
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
              <th scope="col">Ganancia</th>
              <th scope="col"></th>
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
                      <td className="text-center">{product.total_profit}</td>
                      <td className="text-center">
                        <button
                          type="button"
                          onClick={() => {
                            deleteProduct(product.id_product);
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
        <a href="./productsMenu" class="btn btn-danger btn-lg">
          <span class="icon-house"></span>Regresar
        </a>
      </div>
    </div>
  );
};

export default ProductDelete;
