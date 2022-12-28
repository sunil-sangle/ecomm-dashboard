import React from "react";
import {Navbar,Nav,Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

function Header()
{
    return (
     <> 
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto NavLinks">
            <NavLink>Login</NavLink>
            <NavLink>Register</NavLink>
            <NavLink>Update Product</NavLink>
          </Nav>
        </Container>
      </Navbar>
        </>
    )

}

export default Header;