// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import Login from './Login'
import Blogs from './Blogs'

function App() {
  const [newUser, setNewUser] = useState(null)

  useEffect(() => {
    // console.log()
    fetch("/api/users").then((r) => {
      if (r.ok) {
        r.json().then((newUser) => setNewUser(newUser))
      }
    })
  }, []);

  console.log(newUser) 
  
  if (!newUser) return <Login onLogin={setNewUser} />;

  return (
    <div className="App">
      <Navbar 
      user={newUser} 
      setUser = {setNewUser}/>
    <Routes>
      <Route
      path="/home"
      element={<Blogs/>}
      />
    </Routes>
      
    </div>
  );
}

export default App;
