import React from 'react'
import Login from './Login'
import SignUpContainer from './SignUpContainer';

export default function LoginContainer({ onLogin }) {
  return (
    <div>
      <Login onLogin={onLogin} />
      <SignUpContainer onLogin={onLogin}/>
    </div>
  );
}