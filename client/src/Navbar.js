import React from 'react'
// import ReactDOM from 'react-dom';
// import Button from '@mui/material/Button';

function Navbar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return(
    <div>
      <button onClick={handleLogoutClick}>
          Logout
        </button>
    </div>
  )
}

export default Navbar