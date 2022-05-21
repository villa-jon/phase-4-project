import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap";

const CommentEdit = ({ comment, setComments, editForm, editComment }) => {
  const [current, setCurrent] = useState(comment.comment)

  function handleUpdate(w) {
    // debugger
    w.preventDefault()
    fetch(`api/comments/${comment.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify({
					comment: current
			}),
			})
      .then((response) => {
        if (response.ok) {
          response.json()
          .then((commentOBJ) => {
            editForm()
            editComment(commentOBJ)
            // debugger
          })
        } else {
          response.json()
          .then((errorOBJ) => alert(errorOBJ.error))
        }
      })
      // setComments("")
	  }

  return (
    <div>
      <Form
      onSubmit={handleUpdate}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail" >
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

export default CommentEdit
