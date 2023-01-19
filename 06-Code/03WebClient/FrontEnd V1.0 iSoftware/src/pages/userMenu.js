import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headboard from "../components/headboard";
import MenuUser from "../components/userMenu";

export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <MenuUser />
      </div>
    );
  }
}
