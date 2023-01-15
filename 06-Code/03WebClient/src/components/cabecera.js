import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoEspe from "../assets/images/espe.png";
import Logo from "../assets/images/logoisoftware.jpeg";
import "../css/style.css"

const cabecera = () => {
  return (
    <div className="container divcabecera">
        <div className="row">
            <div className="col">
                <img className="logoespe align-middle" src= {LogoEspe} alt="logoESPE"/>  

            </div>
            <div className="col">
            <a href="./">  <img className="logo" src= {Logo} alt="logoEmpresa"/></a>

            </div>
            <div className="col">

            </div>

        </div>

    </div>
  );
};

export default cabecera;
