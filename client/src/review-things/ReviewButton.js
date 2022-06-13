import React, {useState} from 'react'
import { Button } from "react-bootstrap";
// import { blogs } from ".Blogs.js"

const ReviewButton = () => {

  const [trolls, setTrols] = useState([])

  function handleClick(w) {
    console.log("this is ordering", trolls )
    w.preventDefault();
    debugger
    fetch("/api/alphabetize", {
      method: "GET"
    })
      .then((r) => r.json())
      setTrols(trolls)
  }
// 
  return (
    <div>
      <Button
          onClick={handleClick}
              >
           Alphabetize, please     
            </Button>
    </div>
  )
}

export default ReviewButton

