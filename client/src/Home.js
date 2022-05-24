import React from 'react'

const Home = ({user}) => {
  return (
    <div>
      Hello {user.username}, Welcome to Tumblish!
      the website that allows you to write down your thoughts 
      without the bugs that plagued the original Tumblr. 
      Stay as long as you like!
    </div>
  )
}

export default Home
