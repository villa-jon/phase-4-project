// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './Navbar'
import Signin from './Signin'

function App() {
  const [newUser, setNewUser] = useState(null)

  


  return (
    <div className="App">
      <Navbar/>
      <Signin/>
      
    </div>
  );
}

export default App;
