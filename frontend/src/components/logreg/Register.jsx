import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './logreg.css'
import { Link, NavLink } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:""
  })

  const { username, email, password } = user

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  return (
    <Form className='logregForm'>
      {/* {console.log("User", user)} */}
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name="username" onChange={handleChange} value={username} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} value={email} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={password} />
      </Form.Group>
      
      <div className='bottom-form'>
        <Button variant="danger" type="submit">
          Register
        </Button>
        <span> Already have an Account? <NavLink as={Link} to="/"> Login Here </NavLink> </span>
      </div>
    </Form>
  )
}
