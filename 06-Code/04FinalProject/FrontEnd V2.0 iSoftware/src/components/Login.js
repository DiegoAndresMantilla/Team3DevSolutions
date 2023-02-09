import React, { Component } from "react";
import "../css/style.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { ApiUrl } from "../services/apiServices";
import Logo from "../assets/images/isoftware.png";

const baseUrl = ApiUrl + "/searchUsers";
const cookies = new Cookies();

class login extends Component {
  manejadorSubmit(e) {
    e.preventDefault();
  }

  state = {
    form: {
      txtUsuario: "",
      txtPassword: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: {
          id_user: this.state.form.txtUsuario,
          identification: this.state.form.txtPassword,
        },
      })
      .then((response) => {
        return response.data;
        })
      .then((response) => {
        if (response) {
          cookies.set("id", response.userid, { path: "/" });
          cookies.set("cedula", response.cedula, { path: "/" });
          cookies.set("name", response.name, { path: "/" });
          cookies.set("lastName", response.lastName, { path: "/" });
         alert(`Bienvenido ${response.name} ${response.lastName}`);
          window.location.href = "./principal";
        } else {
          alert("El usuario o la contraseña son incorrectos");
          console.log(response);
        }
      })
      .catch((error) => {
        alert("El usuario o la contraseña son incorrectos");
      });
  };

  componentDidMount() {
    if (cookies.get("id")) {
      window.location.href = "./principal";
    }
  }

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              className="image-login"
              src={Logo}
              id="icon"
              alt="User Icon"
            />
          </div>

          <form class="row g-3 formulario" onSubmit={this.manejadorSubmit}>
            <input
              type="text"
              id="txtUsuario"
              className="fadeIn second"
              name="txtUsuario"
              placeholder="Usuario"
              onChange={this.handleChange}
            ></input>
            <input
              type="password"
              id="txtPassword"
              className="fadeIn third"
              name="txtPassword"
              placeholder="Contraseña"
              onChange={this.handleChange}
            ></input>
            <button
              class="btn btn-danger"
              type="submit"
              onClick={() => this.iniciarSesion()}
              className="btn-primary"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default login;
