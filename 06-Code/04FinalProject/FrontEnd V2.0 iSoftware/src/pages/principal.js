import React, { Component } from "react";
import Headboard from "../components/headboard";
import Menu from "../components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default class principal extends Component {
  componentWillMount() {
    if (!cookies.get("id")) {
      window.location.href = "./";
    }
  }
  render() {
    return (
      <div>
        <div>
          <Headboard />
          <Menu />
        </div>
      </div>
    );
  }
}
