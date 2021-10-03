import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReactBootstrap, {Navbar,NavDropdown,Container,Nav,Button} from 'react-bootstrap';

function Navbarr() {
    return (
        <>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">SPORTIZA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <NavDropdown title="Tournament" id="basic-nav-dropdown">
          <NavDropdown.Item href="/addtournament">Add</NavDropdown.Item>
          <NavDropdown.Item href="/edittournament">Edit</NavDropdown.Item>
          <NavDropdown.Item href="/tournamentlist">View</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Schedule" id="basic-nav-dropdown">
          <NavDropdown.Item href="/addschedule">Add</NavDropdown.Item>
          <NavDropdown.Item href="/editschedule">Edit</NavDropdown.Item>
          <NavDropdown.Item href="/schedulelist">View</NavDropdown.Item>
    </NavDropdown>
      <Nav.Link href="#">Logout</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
}

export default Navbarr;

