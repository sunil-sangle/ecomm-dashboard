import React from "react";
import {Navbar,Nav,Container} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import logo from './Assets/images/ecom-logo.png' // relative path to image 

function Header()
{
    return (
     <> 
      <Navbar bg="dark" variant="dark">
        <Container>
          
            <Link className="logo" to="/"> <img src={logo} alt={"logo"}/></Link>
            <Nav className="my-auto NavLinks">
              <Link to="login">Login</Link>
              <Link to="register">Register</Link>
              <Link to="addproduct">Add Product</Link>
              <Link to="updateproduct">Update Product</Link>
              <Link to="timeCounter">Time-Counter</Link>
            </Nav>
        
        </Container>
      
      </Navbar>
        </>
    )

}

export default Header;