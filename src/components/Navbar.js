import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar({ toggleFormVisibility, onSearch }) {
  return (
    <Navbar className="nav">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <Header />
        </Link>
        <Search onSearch={onSearch} />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Button variant="online-success" onClick={toggleFormVisibility}>
            Create a Blog
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
