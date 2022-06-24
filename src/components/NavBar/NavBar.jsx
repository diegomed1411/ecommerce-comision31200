import React from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './NavBar.css'
import logo from '../../assets/static/logo_avion.png'
import CartWidjet from '../CartWidget/CartWidjet';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand to="/">
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categoria/valijas">Valijas</NavLink>
        <NavLink to="/categoria/mochilas">Mochilas</NavLink>
        <NavDropdown title="otros sin usar" id="navbarScrollingDropdown">
            <NavLink to="/categoria/valijas">
            <NavDropdown.Item >Valijas</NavDropdown.Item>
            </NavLink>
            <NavLink to="/categoria/mochilas">
            <NavDropdown.Item >mochilas</NavDropdown.Item>
            </NavLink>


          <NavDropdown.Divider />
          <NavDropdown.Item to="#action7">
            Ver más destinos
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <NavLink to="/cart">
        <CartWidjet />
      </NavLink>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}


export default NavBar