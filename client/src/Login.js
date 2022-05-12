import React, {useState} from "react"
import { Form, Button } from "react-bootstrap";
// import SignUpContainer from './SignUpContainer';

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(w) {
    w.preventDefault(); 
    setIsLoading(true)
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } 
    });
  }

  return(
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
      <Form.Label htmlFor="username">Username: </Form.Label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label htmlFor="password">Password: </Form.Label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outline-primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </Form.Group>
      </Form>
    </div>
  )
}

export default Login