// Navbar.js
import React from "react";
import "./Navbar.css";
import Header from "./Header";
import Search from "./Search";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar({ toggleFormVisibility, onSearch }) {
  return (
    <Navbar className="nav">
      <Container fluid>
        <Header />
        <Search onSearch={onSearch} />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
          <Button variant="online-success" onClick={toggleFormVisibility}>
            Create a Blog
          </Button>
          <NavDropdown title="&#9776;" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
