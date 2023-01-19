import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UsersList from "../components/userList";
import Headboard from "../components/headboard";

export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <UsersList />
      </div>
    );
  }
}
