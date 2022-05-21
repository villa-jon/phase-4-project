import React from 'react'
import "./css/Comment.css"
import CommentCard from "./CommentCard"

const Comment = ({ setUser, comments, setComments, editComment }) => {
  // console.log("this is a comment" , comments)

  // debugger

  // const twitterish = comments.map((comment) => <CommentCard
  // key={comment.id} comment={comment} 
  // newUser={setUser} editComment={editComment} setComments={setComments}/>)

  // function twitterish() {
  //   console.log("this is a comment" , comments)
  //   // debugger
  //   return(
  //     comments.map((comment) => <CommentCard
  // key={comment.id} comment={comment} 
  // newUser={setUser} editComment={editComment} setComments={setComments}/>)
  //   )
  // }

  function twitterish() {
    console.log("this is a comment in comment component" , typeof comments)
    // debugger
    return(
      comments.map((comment) => <CommentCard
  key={comment.id} comment={comment} 
  newUser={setUser} editComment={editComment} setComments={setComments}/>)
    )
  }

  return (
    <div>
      {twitterish()} 
    </div>
  )
}

export default Comment
