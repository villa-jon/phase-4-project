// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './NavBar'
import LoginContainer from './LoginContainer'
import Blogs from './Blogs'
import Home from './Home'
import CreateBlogs from'./CreateBlogs'
// import SignUpContainer from './SignUpContainer';

function App() {
  const [newUser, setNewUser] = useState(null)

  useEffect(() => {
    // console.log(newUser)
    fetch("/api/current-user").then((r) => {
      // debugger
      if (r.ok) {
        r.json().then((newUser) => setNewUser(newUser))
      }
    })
  }, []);

  console.log(newUser) 
  
  if (!newUser) return <LoginContainer onLogin={setNewUser} />;

  // I'm pretty sure that this ^ is causing my sign-up to go bweh!
  // I may have to move this down into div or create a ternaryjvilanueva01
  
  return (
    <div className="App">
      <Navbar 
      user={newUser} 
      setUser = {setNewUser}/>
    <Routes>
      <Route
      path="/blogs"
      element={<Blogs/>}
      />
      <Route
      path="/home"
      element={<Home/>}
      />
      {/* <Route
      path="/signupcontainer"
      element={<SignUpContainer/>}
      />  */}
      <Route
      path="/createblogs"
      element={<CreateBlogs/>}
      />
    </Routes>
      
    </div>
  );
}

export default App;
