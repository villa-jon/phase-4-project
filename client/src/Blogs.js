import React, {useEffect, useState} from 'react';
import BlogForm from "./BlogForm"
import Header from "./Header"
// import ReviewButton  from "./
import { Button } from "react-bootstrap";

import "./css/Blogs.css"

function Blogs({ setUser }) {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState("")

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

  function handleSubmit(w) {
    // console.log("this is ordering" )
    w.preventDefault();
    fetch("/api/most-votes", {
      method: "GET"
    })
    // console.log()
    .then((r) => r.json())
    .then((data) => setBlogs(data))
    // debugger
  }

  function handleSubmit1(w) {
    // console.log("this is ordering" )
    w.preventDefault();
    // debugger
    fetch("/api/dealphabetize", {
      method: "GET"
    })
      // console.log()
      .then((r) => r.json())
      .then((data) => setBlogs(data))
  } 


  function editBlog(newBlog) {
    const updatedBlogsLOL = blogs.map((blog) => {
      return blog.id === newBlog.id ? newBlog : blog  
    }) 
    setBlogs(updatedBlogsLOL)
  }

  function removeItem(id) {
    const gone = blogs.filter((blog) => blog.id !== id)
    setBlogs(gone)
  }

  function handleDelete(w, id) {
    w.preventDefault()
    console.log(id)
    fetch(`/api/blogs/${id}`, {
      method: "DELETE", 
    })
    .then(() => removeItem(id), [])
  }

  const showBlogs = blogs.filter((blog) => {
		return  blog.name.toLowerCase().includes(search.toLowerCase())}
	)

  return (
       <div className="parentSignin">
          <Header
          search={search}
          setSearch={setSearch}
          // blogs={blogs}
          />
          <BlogForm
          showDelete={handleDelete}
          blogs={showBlogs}
          // blogs={blogs}
          edtUGHedit={editBlog}
          setUser={setUser}
          /> 
          {blogs ? 
          <Button
          onClick={handleSubmit}
              >
           most Blogs, please     
            </Button>
            :
          <div>
            {blogs.post}
          </div> 
}
         </div>  
  );
}

export default Blogs