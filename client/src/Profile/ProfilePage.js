import React, {useEffect, useState} from 'react'

const ProfilePage = () => {
  const [blogs, setBlogs] = useState([])

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

  return (
    <div>
      
    </div>
  )
}

export default ProfilePage
