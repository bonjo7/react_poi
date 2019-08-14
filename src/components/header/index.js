
import React, { Component } from "react";
import { Navbar, Form, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButton from "../authentication/authButton";
class Header extends Component {
  render() {
    return (
      <Navbar fixed="top" expand="lg" variant="light" bg="light">
        <Navbar.Brand> <Link to="/">Waterford POI</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          <Form inline>

            <AuthButton />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;