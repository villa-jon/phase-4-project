import React, {useState} from "react"
import { Form, Button } from "react-bootstrap";

function CreateBlogs(){
  const [sBlogs, setBlogsNow] = useState([])
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
        blog: {
          name: name, 
          post: post
        }
      }),
    })
      .then((r) => r.json())
      .then((sBlogs) => setBlogsNow(sBlogs));
  }

  return(
    <div>
      <Form
      onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Blog Content</Form.Label>
          <Form.Control type="text" value={sBlogs} onChange={(w) => setBlogsNow(w.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>        
        
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Blog Content</Form.Label>
          <Form.Control type="text" value={sBlogs} onChange={(w) => setBlogsNow(w.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  )

}

export default CreateBlogs