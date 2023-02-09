import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/isoftware.png";
import "../css/style.css";

const headboard = () => {
  return (
    <div class="nav-bg">
    <nav class="navegacion-principal contenedor ">
     <a href="./principal" >
        {" "}
        <img className="logo" src={Logo} alt="logoEmpresa" />
        Sistema de inventario iSoftware
      </a>
    </nav>
</div>
  );
};

export default headboard;
