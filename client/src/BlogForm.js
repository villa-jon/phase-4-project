import React from 'react';
import BlogCard from "./BlogCard"
import "./css/Blogs.css"

function BlogForm({ blogs, edtUGHedit, showDelete, setUser }) {
  console.log('these are blogs', blogs)
  const twitterish = blogs.map((blog) => <BlogCard edtUGHedit=
  {edtUGHedit} 
  newUser={setUser}
  showDelete={showDelete}

  key={blog.id} blog={blog} />)

  return (
  <div className="parentSignin">{twitterish}</div>  
  );
}

export default BlogForm