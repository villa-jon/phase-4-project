import React, {useState} from 'react'
import "./css/Blogs.css"
// import BlogCard from "./BlogCard"
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const ProfilePage = ({ newUser }) => {
  const [blogs, setBlogs] = useState(newUser.liked_blogs)
  const [likes, setLikes] = useState(blogs.vote_likes)
  const [destroyLike, setDestroyLike] = useState(false)
  const [user, setUser] = useState(null)

  console.log(likes)

  function destroyLikes() {
    // console.log("this is destroyLike", blog.destroy_likes)
    // debugger
    fetch(`/api/votes/${blogs.destroy_likes.shift().id}`, 
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
    // console.log("this is user", user)
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
        blog_id: blogs.id, 
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
          setUser(newUser.liked_blogs)
          setLikes(newUser.liked_blogs)})

    } else {
      r.json()
      .then((errorOBJ) =>alert(errorOBJ.error))
    }
    })
  }

  const likedBlogs = blogs.map((blog) => <div>
    <Card>
        <div key={blog.id}>
        <Card.Header as="h5">{blog.name}</Card.Header>
          <Card.Body>
          <p>{blog.post}</p>
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
      </Card>
      {/* <BlogCard/> */}
  </div>)

  console.log(blogs, likedBlogs, "this is user's liked blogs" , newUser.liked_blogs)

  return (
    <div>
      {likedBlogs}
    </div>
  )
}

export default ProfilePage
