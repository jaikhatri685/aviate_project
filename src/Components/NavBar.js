import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../Assets/icons/Logo.svg"
import React, { useState } from "react";
import { Link } from "react-router-dom";


function NavBar() {


  const [activeLink, setActiveLink] = useState("home");

  return (
    <div className={`fixed z-50 top-0 w-full px-6 py-2 text-white `} style={{background:"#121212"}}>
    <Navbar collapseOnSelect bg="transparent" expand="lg" >
      <Container fluid className="items-center">
        <Navbar.Brand >
            <Link to="/aviate_project"><img src={Logo} alt="logo"/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link to="/aviate_project/calculator"><Nav.Link href="#action1" onClick={() => setActiveLink("calculator")}
              className={` text-white  ${
                activeLink === "calculator" ? "active" : ""
              }`}>Currency Exchange Calculator</Nav.Link></Link>
           <Link to="/aviate_project/visualizer"><Nav.Link href="#action2" onClick={() => setActiveLink("data_visualizer")}
              className={` text-white  ${
                activeLink === "data_visualizer" ? "active" : ""
              }`}>Data Visualizer</Nav.Link></Link>
          </Nav>
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;