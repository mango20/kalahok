import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Assets/Images/logo.png";
import style from "../../../Assets/Styles/Header/index.module.css";
function Header() {
  const home = () => {
    document.getElementById("home").scrollIntoView();
  };

  const about = () => {
    document.getElementById("about").scrollIntoView();
  };

  const event = () => {
    document.getElementById("event").scrollIntoView();
  };

  const partners = () => {
    document.getElementById("partners").scrollIntoView();
  };

  const contact = () => {
    document.getElementById("contact").scrollIntoView();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Container fluid>
        <Image
          src={logo}
          style={{ width: "30px", marginRight: "10px" }}
        ></Image>
        <Navbar.Brand className={style.brandName} style={{ color: "#36408d" }}>
          Kalahok
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link onClick={home}>Home</Nav.Link>
            <Nav.Link onClick={about}>About</Nav.Link>
            <Nav.Link onClick={event}>Event</Nav.Link>
            <Nav.Link onClick={partners}>Partners</Nav.Link>
            <Nav.Link onClick={contact}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
