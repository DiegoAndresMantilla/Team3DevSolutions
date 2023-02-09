import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headboard from "../components/headboard";
import UserForm from "../components/userEdit";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default class usuarios extends Component {
  componentWillMount() {
    if (!cookies.get("id")) {
      window.location.href = "./";
    }
  }
  render() {
    return (
      <div>
        <Headboard />
        <UserForm />
      </div>
    );
  }
}
