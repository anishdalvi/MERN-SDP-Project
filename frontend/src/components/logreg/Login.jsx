import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './logreg.css'
import { Link, NavLink } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const { email, password } = user

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  //console.log(email, password);

  return (
    <Form className='logregForm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} value={email} />
       
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
      </Form.Group>
      
      <div className='bottom-form'>
        <Button variant="danger" type="submit">
          Login
        </Button>
        <span> Do not have an Account? <NavLink as={Link} to="/register"> Register Here </NavLink> </span>
      </div>
    </Form>
  )
}
