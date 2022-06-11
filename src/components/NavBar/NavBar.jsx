import React from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './NavBar.css'
import logo from '../../assets/static/logo_avion.png'
import CartWidjet from '../CartWidget/CartWidjet';


const NavBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
      <img src= {logo} alt="logo de avion" id="logo" />
      Tienda Viajes
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
      <Nav
        className="me-auto my-2 my-lg-0 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/detalle">Articulos</Nav.Link>
        <NavDropdown title="Destinos" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Asia</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Europa</NavDropdown.Item>
          <NavDropdown.Item href="#action5">America</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Africa</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action7">
            Ver más destinos
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <CartWidjet />
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}


export default NavBar