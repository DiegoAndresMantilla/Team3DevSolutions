import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import {Link} from 'react-router-dom'
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

  function deleteUser(idUser) {
    fetch(`http://34.125.121.4:3003/iSoftware/deleteUser?id_user=${idUser}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User with id " + idUser + " was deleted!");
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
              <a href="./usersMenu">Menú</a>
            </li>
            <li class="breadcrumb-item active">Lista de Usuarios</li>
          </ol>
        </div>

        <h3 className="text-center">Usuarios</h3>
        <div className="col-auto text-center"></div>
      </div>
      <div class="table-responsive">
        <table className="table table-dark  table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Cédula</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Dirección</th>
              <th scope="col">Teléfono</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {!user
              ? "Loading"
              : user.map((user, index) => {
                  return (
                    <tr className="table-success">
                      <td className="text-center">{user.id_user}</td>
                      <td className="text-center">{user.identification}</td>
                      <td className="text-center">{user.name_user}</td>
                      <td className="text-center">{user.lastname_user}</td>
                      <td className="text-center">{user.address}</td>
                      <td className="text-center">{user.phone}</td>
                      <td className="text-center">
                      &nbsp;&nbsp;
                      <Link to={`/userEdit/${user.id_user}`}><button className="btn btn-primary btn-sm">Editar</button></Link>
                      &nbsp;
                      &nbsp;
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          onClick={() => {
                            deleteUser(user.id_user);
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
        <a href="/usersMenu" class="btn btn-danger btn-lg">
          <span class="icon-house"></span>Regresar
        </a>
      </div>
    </div>
  );
};

export default UserList;
