import React, {useState} from "react"
import { Form, Card, Button } from "react-bootstrap";
// import Blogs from "./Blogs"

function EditForm({blog, edtUGHedit, bOooo}) {
  const [current, setCurrent] = useState(blog.post)

  function handleUpdate(w) {
    // debugger
    w.preventDefault()
    fetch(`api/blogs/${blog.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify({
					post: current
			}),
			})
      .then((response) => {
        if (response.ok) {
          // debugger
          response.json()
          .then((blogOBJ) => {
            bOooo()
            edtUGHedit(blogOBJ)
          })
        } else {
          response.json()
          .then((errorOBJ) => alert(errorOBJ.error))
        }
      })
      
	  }

  return(
    <div>
      <Form
      onSubmit={handleUpdate}
      >
        <Card.Header as="h5">{blog.name}</Card.Header>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Blog Content</Form.Label>
          <Form.Control type="text" value={current} onChange={(w) => setCurrent(w.target.value)} />
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

export default EditForm