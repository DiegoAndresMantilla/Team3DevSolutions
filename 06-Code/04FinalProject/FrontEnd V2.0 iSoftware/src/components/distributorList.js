import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";
const DistributorList = () => {
  const [distributor, setClient] = useState();
  const url = ApiUrl + "listDistributors";
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setClient(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  });

  function deleteDistributor(idDistributor) {
    fetch(
      `http://34.125.121.4:3003/iSoftware/deleteDistributor?id_distributor=${idDistributor}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User with id " + idDistributor + " was deleted!");
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
              <a href="./distributorsMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Lista de Distribuidores</li>
          </ol>
        </div>
        <h3 className="text-center">Distribuidores</h3>
        <div className="col-auto text-center"></div>
      </div>
      <div class="table-responsive">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="">
              <th scope="col">ID Distribuidor</th>
              <th scope="col">RUC Distribuidor</th>
              <th scope="col">Nombre</th>
              <th scope="col">ID Producto</th>
              <th scope="col">Precio Distribuidor</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Ganancia Unitaria</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {!distributor
              ? "Loading"
              : distributor.map((distributor, index) => {
                  return (
                    <tr className="table-success">
                      <td className="text-center">
                        {distributor.id_distributor}
                      </td>
                      <td className="text-center">
                        {distributor.ruc_distributor}
                      </td>
                      <td className="text-center">
                        {distributor.name_distributor}
                      </td>
                      <td className="text-center">{distributor.id_product}</td>
                      <td className="text-center">{distributor.dealerPrice}</td>
                      <td className="text-center">{distributor.subtotal}</td>
                      <td className="text-center">{distributor.unit_profit}</td>
                      <td className="text-center">
                        &nbsp;&nbsp;
                        <Link
                          to={`/distributorEdit/${distributor.id_distributor}`}
                        >
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
                            deleteDistributor(distributor.id_distributor);
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
        <a href="./distributorsMenu" class="btn btn-danger btn-lg">
          <span class="icon-house"></span>Regresar
        </a>
      </div>
    </div>
  );
};

export default DistributorList;
