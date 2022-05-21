import React, {useState} from "react"
import { Form, Button } from "react-bootstrap";

const PostComment = ({newUser, blog, setBlogComments}) => {
  const [trolls, setTrols] = useState("")

  function handleSubmit(w) {
    w.preventDefault();
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: trolls,
        user_id: newUser.id, 
        blog_id: blog.id
      }),
    })
      .then((r) => r.json())
      .then((comment) => setBlogComments((that) => [...that, comment]))
      setTrols("")
  }
  return (
    <div>
      <div>
      <Form
      onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Comments</Form.Label>
          <Form.Control type="text" value={trolls} onChange={(w) => setTrols(w.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
    </div>
  )
}

export default PostComment
