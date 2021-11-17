import React from "react";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import { NavbarBrand } from "reactstrap";

function Header(props) {
  return (
    <div style={{ padding: 20 }}>
      <NavbarBrand className="masthead-brand" href="/">
        <img
          className="masthead-brand ml-3"
          src="https://d2g8igdw686xgo.cloudfront.net/47779042_1588344826540830_r.jpeg"
          height="30"
          width="40"
        ></img>
      </NavbarBrand>
      <h3 className="masthead-brand">BADRUNDEEN</h3>
      <Nav className="nav nav-masthead justify-content-center">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/features">Causes</Nav.Link>
        <Nav.Link href="/meetus">Event(s)</Nav.Link>
        <Nav.Link href="/aboutus">Our Instructor</Nav.Link>
        <Nav.Link href="/contact">Donate</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
      </Nav>
    </div>
  );
}

export default Header;
