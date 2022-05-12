import React, {useEffect, useState} from 'react';
import BlogForm from "./BlogForm"
import "./css/Blogs.css"

function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("/api/blogs")
    .then((r) => r.json())
    .then((blogs) => {
      // debugger
      setBlogs(blogs)
    })
  }, []);

  function editBlog(newBlog) {
    const updatedBlogsLOL = blogs.map((blog) => {
      return blog.id === newBlog.id ? newBlog : blog  
    }) 
    setBlogs(updatedBlogsLOL)
  }

  const showBlogs = blogs.filter((blog) => {
		return  blog.name.toLowerCase().includes(search.toLowerCase())}
	)

  return (
       <div className="parentSignin">
          <BlogForm
          blogs={showBlogs}
          edtUGHedit={editBlog}
          /> 
         </div>  
  );
}

export default Blogs