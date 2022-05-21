import React, {useState} from 'react'
import { Card, Button } from "react-bootstrap";
import CommentEdit from "./comments-section/CommentEdit"
import CommentDelete from "./comments-section/CommentDelete"

const buttonStyle = {
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'auto',
  flexDirection: 'row',
  fontFamily: 'Times New Roman'
}

const CommentCard = ({ comment, setComments, editComment }) => {
  const [edit, setEdit] = useState(false)
  // const [likes, setLikes] = useState(comment.vote_likes)
  
  const editForm = () => {
    setEdit(!edit)
  }

  return (
    <div>
      {edit ? 
      <CommentEdit
      comment={comment}
      editForm={editForm}
      setComments={setComments}
      editComment={editComment}
      /> :
      <Card
      style={buttonStyle}
      >
        <div key={comment.id}>
          <Card.Body>
          <p>{comment.comment}</p>
          <Button size="sm" onClick={editForm}>edit</Button>
          <CommentDelete
          comment={comment}
          setComments={setComments}
          />
          </Card.Body>
        </div>
      </Card> }
    </div>
  )
}

export default CommentCard
