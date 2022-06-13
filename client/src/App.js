// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './NavBar'
import LoginContainer from './LoginContainer'
import Blogs from './Blogs'
import Home from './Home'
import CreateBlogs from'./CreateBlogs'
import ProfilePage from './ProfilePage'
import ReviewButton from './review-things/ReviewButton'
// import { Button } from "react-bootstrap";


function App() {
  const [newUser, setNewUser] = useState(null)
  // const [blogs, setBlogs] = useState([])

  useEffect(() => {
    // console.log(newUser)
    fetch("/api/current-user").then((r) => {
      // debugger
      if (r.ok) {
        r.json().then((newUser) => setNewUser(newUser))
      }
    })
  }, []);

  // console.log("this is new user", newUser) 
  
  if (!newUser) return <LoginContainer onLogin={setNewUser} />;

  // I'm pretty sure that this ^ is causing my sign-up to go bweh!
  // I may have to move this down into div or create a ternaryjvilanueva01

  // function handleSubmit(w) {
  //   // console.log("this is ordering" )
  //   w.preventDefault();
  //   fetch("/api/min-blogs", {
  //     method: "GET"
  //   })
  //   // console.log()
  //   .then((r) => r.json())
  //   .then((data) => setNewUser(data))
  //   // debugger
  // }
  
  return (
    <div className="App">
      <NavBar 
      user={newUser} 
      setUser = {setNewUser}/>
    <Routes>
      <Route
      path="/blogs"
      element={<Blogs 
      setUser = {newUser}/>  
      }
      />
      <Route
      path="/home"
      element={<Home
      user={newUser}
      />}
      />
      <Route
      path="/createblogs"
      element={<CreateBlogs
      newUser={newUser}
      />}
      />
      <Route
      path="/profilepage"
      element={<ProfilePage
      newUser={newUser}
      />}
      />
      <Route
      path="/reviewbutton"
      element={<
        ReviewButton
      />}
      />
    </Routes>
    </div>
  );
}

export default App;
