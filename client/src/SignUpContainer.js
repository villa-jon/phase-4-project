import React, {useState} from 'react'
import SignUp from "./SignUp"
import { Button } from "react-bootstrap";

const SignUpContainer = ({onLogin}) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      <Button
      variant="primary" 
      onClick={() => setModalShow(true)}
      >Sign Up Here, it's free
      </Button>
      <SignUp
      show={modalShow}
      onLogin={onLogin}
      onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default SignUpContainer
