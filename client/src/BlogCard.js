import React, {useState} from 'react'
import EditForm from "./EditForm"
import Comment from "./Comment"
import PostComment from "./comments-section/PostComment"
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';

const BlogCard = ({ blog, edtUGHedit, showDelete, newUser}) => {
  const [likes, setLikes] = useState(blog.vote_likes)
  const [edit, setEdit] = useState(false)
  const [destroyLike, setDestroyLike] = useState(false)
  const [blogComments, setBlogComments] = useState(blog.comments)
  // console.log("this is likes" + likes)
  const [user, setUser] = useState(null)

  function editComment(newComment) {
   
    const updatedCommentsLOL = blogComments.map((comment) => {
      return comment.id === newComment.id ? newComment : comment  
    }) 
    setBlogComments(updatedCommentsLOL)
  }

  const editForm = () => {
    setEdit(!edit)
  }

  function incrementMe(w) {
    // console.log(w.target.value)
    // debugger
    w.preventDefault()
    fetch("api/votes", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
				"Accept" : "application/json"
      },
      body: JSON.stringify({
        blog_id: blog.id, 
        user_id: newUser.id
      })
    })
    .then((r) => {
      if (r.ok){
        // debugger
        r.json()
        .then((likes) => {
          // debugger
          setDestroyLike(true)
          setUser(likes.blog.show_users)
          setLikes(likes.blog.vote_likes)})

    } else {
      r.json()
      .then((errorOBJ) =>alert(errorOBJ.error))
    }
    })
  }

  function destroyLikes() {
    // console.log("this is destroyLike", blog.destroy_likes)
    // debugger
    fetch(`/api/votes/${blog.destroy_likes.shift().id}`, 
    { method: "DELETE" }).then((r) => {
      if (r.ok) {
        console.log("this is destroyLike", likes - 1)
        // debugger
        setLikes(likes - 1);
        setDestroyLike(false)
      }
    });
  }

  function showUser() {
    console.log("this is user", user)
    // debugger
    if (user != null) {
    let w =  user.filter((x, y) => user.indexOf(x) === y)  
    console.log(w)
    return w.map(x => (
      <div>
        {x}
      </div>

    )
    )

    }
     
    // debugger
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
          onClick={(w) => showDelete(w, blog.id)}
          >Delete</Button> 
        <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip-2">{showUser()}</Tooltip>}
        >
          { destroyLike ? <Button
          onClick={destroyLikes} 
          value={`Unlike ${likes}`}
          >
            Unlike {likes}
          </Button>  
          :
          <Button
              onClick={incrementMe} 
              value={`Likes ${likes}`}
              >Likes {likes}
            </Button>}
        </OverlayTrigger>
          </Card.Body>
        </div>
        <PostComment
        blog={blog}
        newUser={newUser}
        setBlogComments={setBlogComments}
        />
        <Comment
        newUser={newUser}
        comments={blogComments}
        setComments={setBlogComments}
        editComment={editComment}
        />
      </Card> 
      }
    </div>
  )
}

export default BlogCard
