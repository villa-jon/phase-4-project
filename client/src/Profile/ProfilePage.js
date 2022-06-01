import React, {useEffect, useState} from 'react'

// import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const ProfilePage = ({ newUser }) => {
  const [blogs, setBlogs] = useState(newUser.liked_blogs)

  useEffect(() => {
    const abortController = new AbortController()
    fetch("/api/blogs", {
      signal: abortController.signal
    })
    .then((r) => r.json())
    .then((blogs) => {
      // debugger
      setBlogs(blogs)
      
    })
    return () => {
      abortController.abort()
      // stop the query by aborting on the AbortController on unmount
    }
  }, []);

  const likedBlogs = blogs.map((blog) => <div key={blog.id}>

  </div>)

  console.log(likedBlogs)

  return (
    <div>
      {likedBlogs}
    </div>
  )
}

export default ProfilePage
