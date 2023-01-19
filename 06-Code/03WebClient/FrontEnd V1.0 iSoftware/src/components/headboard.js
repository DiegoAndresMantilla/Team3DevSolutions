import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoEspe from "../assets/images/espe.png";
import Logo from "../assets/images/isoftware.png";
import "../css/style.css";

const headboard = () => {
  return (
    <div className="container-nbar divheadboard ">
      <div className="row">
        <div className="col-2">
          <a href="./">
            {" "}
            <img className="logo" src={Logo} alt="logoEmpresa" />
          </a>
        </div>
        <div className="col-8 nbar-header">
          <h2> Sistema de inventario iSoftware</h2>
        </div>
      </div>
    </div>
  );
};

export default headboard;
