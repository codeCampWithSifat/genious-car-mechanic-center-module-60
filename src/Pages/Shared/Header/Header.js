import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import auth from "../../../firebase.init"
import { useAuthState } from 'react-firebase-hooks/auth';
import {  signOut } from 'firebase/auth';



const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to ="home"className="m-3">Home</Nav.Link>
            <Nav.Link href="home#services"className="m-3">Services</Nav.Link>
            <Nav.Link href="home#experts"className="m-3">Experts</Nav.Link>
            
           {user && <>
            <Nav.Link as={Link} to="/addservice" className="m-3">
              Add Service
            </Nav.Link>
            <Nav.Link as={Link} to="/manage" className="m-3">
              Manage Service
            </Nav.Link>
           </>}
            {!user ? <Nav.Link as={Link} to="/login" className="m-3">
              Login
            </Nav.Link> : <Button variant="danger" onClick={logout} className="m-3">Logout</Button> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
