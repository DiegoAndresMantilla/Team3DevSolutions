import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";

const UserList = () => {
  const [user, setClient] = useState();
  const url = ApiUrl + "listUsers";
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
              <a href="./usersMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Lista de Usuarios</li>
          </ol>
        </div>

        <h3 className="text-center">Usuarios</h3>
        <h4 className="text-left">Developer: Mateo Loachamin</h4>
        <div className="col-auto text-center"></div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Cédula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {!user
            ? "Loading"
            : user.map((user, index) => {
                return (
                  <tr className="table-info">
                    <td className="text-center">{user.id_user}</td>
                    <td className="text-center">{user.identification}</td>
                    <td className="text-center">{user.name_user}</td>
                    <td className="text-center">{user.lastname_user}</td>
                    <td className="text-center">{user.address}</td>
                    <td className="text-center">{user.phone}</td>
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
        <a href="./usersMenu" class="btn btn-danger btn-lg">
          <span class="icon-house"></span>Regresar
        </a>
      </div>
    </div>
  );
};

export default UserList;
