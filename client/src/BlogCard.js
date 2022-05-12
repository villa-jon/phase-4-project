import React, {useState} from 'react'
import EditForm from "./EditForm"
import { Card, Button } from "react-bootstrap";

const BlogCard = ({ blog, edtUGHedit}) => {
  const [likes, setLikes] = useState(0)
  const [edit, setEdit] = useState(false)

  const editForm = () => {
    setEdit(!edit)
  }

  function incrementMe() {
    console.log(likes)
    let newCount = likes + 1
    setLikes({
      count: newCount
    })
  }

  return (
    <div>
      {edit ? 
      <EditForm 
      blog={blog}
      bOooo={editForm}
      edtUGHedit={edtUGHedit}
      /> :
      <Card>
        <div key={blog.id}>
        <Card.Header as="h5">{blog.name}</Card.Header>
          <Card.Body>
          <p>{blog.post}</p>
            <Button onClick={editForm}>edit</Button>
          <Button
          onClick={incrementMe} 
          value={likes}
          >Likes: {setLikes} 
          </Button>
          </Card.Body>
        </div>
      </Card> 
      }
    </div>
  )
}

export default BlogCard
