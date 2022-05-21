import React from 'react'
import { Button } from "react-bootstrap";

const CommentDelete = ({ comment, setComments }) => {

  // console.log(comment)

  function removeItem(id) {
    setComments(comments => comments.filter((c) => c.id !== id))
  }

  function handleDelete() {
    // console.log('blah', comment)
    fetch(`/api/comments/${comment.id}`, {
      method: "DELETE", 
    })
    .then(() => removeItem(comment.id))
  }
  return (
    <div>
      <Button
          size="sm"
          onClick={handleDelete}
          >Delete
      </Button>
    </div>
  )
}

export default CommentDelete
