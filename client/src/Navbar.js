import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
// import ReactDOM from 'react-dom';
// import Button from '@mui/material/Button';

const buttonStyle = {
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  fontFamily: 'Times New Roman'
}

function NavBar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/api/logout", 
    { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return(
    <div className="navber">
     <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
          <Nav className="me-auto">
              <NavLink to="/home" style={{padding: '10px'}}>Home</NavLink>
              <NavLink to="/blogs" style={{padding: '10px'}}>Blogs</NavLink>
              <NavLink to="/createblogs" style={{padding: '10px'}}>Post</NavLink>
              <NavLink to="signupcontainer" style={{padding: '10px'}}>Sign Up</NavLink>
           </Nav>
        </Container>
      <div style={buttonStyle}>
      <Row>
        <Col>
          <p style={{width: '8em'}}>
            Welcome, {user.username}
          </p>
        </Col>
      </Row>
      <Row>
        <Col style={{width: '15em'}}>
          <Button 
          onClick={handleLogoutClick}>
            Logout
          </Button>
        </Col>
      </Row>
      </div>
      </Navbar>
    </div>
  )
}

export default NavBar