import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import { Link } from "react-router-dom";
import Logo from "../assets/images/isoftware.png";
import "../css/style.css";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "admin",
      password: "admin2023.*",
    },
    {
      username: "esteban",
      password: "esteban2023.*",
    },
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input src="/principal" type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app centrar">
      <div className="login-form">
        <img className="logo " src={Logo} alt="logoEmpresa" />
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>
            <a href="./principal" class="btn btn-danger btn-lg">
              <span class="icon-house"></span>Ingresar
            </a>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
