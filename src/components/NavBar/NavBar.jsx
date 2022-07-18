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
  <Container>
    <NavLink className= "linkNavigation" to="/">
      <img src= {logo} alt="logo de avion" id="logo" />
      <span id="siteName">TIENDA VIAJES</span>
    </NavLink>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
      <Nav
        className="me-auto my-2 my-lg-0 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink className= "linkNavigation" to="/">Home</NavLink>
        <NavLink className= "linkNavigation" to="/categoria/valijas">Valijas</NavLink>
        <NavLink className= "linkNavigation" to="/categoria/mochilas">Mochilas</NavLink>

      </Nav>
      <NavLink className= "linkNavigation" to="/cart">
        <CartWidjet />
      </NavLink>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}


export default NavBar