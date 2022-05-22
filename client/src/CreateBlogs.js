import React, {useState} from "react"
import "./css/Blogs.css"
import { Form, Button, Row, Col } from "react-bootstrap";

function CreateBlogs({ newUser }){
  const [sBlogs, setBlogsNow] = useState(newUser.id)
  const [name, setName] = useState("")
  const [post, setPost] = useState("")

  function handleSubmit(w) {
    w.preventDefault();
    fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        post: post, 
        user_id: sBlogs
      }),
    })
      .then((r) => r.json())
      .then((sBlogs) => setBlogsNow(sBlogs))
      setName("")
      setPost("");
  }
// console.log('all blogs ', sBlogs)
  return(
    <div>
      <Form
      onSubmit={handleSubmit}
      >
      <Row className="align-items-center">
        <Col xs="auto">
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Blog Name</Form.Label>
          <Form.Control aria-label="Blog Name" type="text" value={name} onChange={(w) => setName(w.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>        
        </Col>
        <Col xs={7}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Blog Content</Form.Label>
          <Form.Control className="textarea" type="text" value={post} onChange={(w) => setPost(w.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        </Col>
        <Col>
        <Button variant="primary" type="submit">
          Post
        </Button>
        </Col>
      </Row>
      </Form>
    </div>
  )

}

export default CreateBlogs