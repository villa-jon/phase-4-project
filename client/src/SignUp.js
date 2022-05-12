import React, {useState} from 'react'
import { Modal, Form, Button } from "react-bootstrap";

const SignUp = ({ show, onHide, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const wordStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: "center",
		flexDirection: 'column',
		paddingTop: '20px',
		fontFamily: 'Montserrat',
		fontWeight: 'bolder',
    paddingBottom: "1vh"
	}

  function handleSubmit(w) {
    w.preventDefault(); 
    setIsLoading(true)
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        user: {
        username, 
        password }
      
      }),
    }).then((r) => {
      setIsLoading(false);
      r.json()
      .then((user) => onLogin(user));
    });
  }

  return (
    <Modal
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    hide={onHide}
    show={show}
    onSubmit={handleSubmit}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter"> Sign Up </Modal.Title>
      </Modal.Header>
      <Form 
      style={wordStyle}
      >
      <Form.Group className="mb-3">
      <Form.Label htmlFor="username">Username: </Form.Label>
        <Form.Control
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label htmlFor="password">Password: </Form.Label>
        <Form.Control
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outline-primary" type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </Form.Group>
      </Form>
      <Modal.Footer>
        <Button onClick={() => onHide()}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SignUp
