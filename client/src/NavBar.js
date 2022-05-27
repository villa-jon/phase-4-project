import React from 'react'
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
            <Nav.Item>
              <Nav.Link href="/home" style={{padding: '10px'}}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blogs" style={{padding: '10px'}}>Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/createblogs" style={{padding: '10px'}}>Post</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profilepage" style={{padding: '10px'}}>Profile</Nav.Link>
            </Nav.Item>
              {/* <NavLink to="signupcontainer" style={{padding: '10px'}}>Sign Up</NavLink> */}
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
          onClick={() => handleLogoutClick()}>
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
