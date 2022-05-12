import React, {useEffect, useState} from 'react';
// import { Card, Button } from "react-bootstrap";
import BlogCard from "./BlogCard"
import "./css/Blogs.css"

function BlogForm({ blogs, edtUGHedit }) {

  const twitterish = blogs.map((blog) => <BlogCard edtUGHedit={edtUGHedit} key={blog.id} blog={blog} />)

  return (
  <div className="parentSignin">{twitterish}</div>  
  );
}

export default BlogForm