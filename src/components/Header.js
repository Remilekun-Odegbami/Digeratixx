import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../Media/digeratixx.png';

function Header() {
    return (
<Navbar expand="lg">
  <Container fluid>
    <Navbar.Brand as={Link} to="/"> <img class="img-fluid w-50" src={logo} alt="Logo" /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        
        <NavDropdown title="Communities" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Front End</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Backend</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/signup">
          Sign Up
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header

