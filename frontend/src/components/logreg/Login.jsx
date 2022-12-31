import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './logreg.css'
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../redux/features/auth/authSlice'
//import Spinner from '../Spinner';

export default function Login() {
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  //const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  const { user, isError, isSuccess, message } = useSelector((state) => state.auth)


  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/')
    }

    //dispatch(reset())
  
    
  }, [user, isError, message, navigate, dispatch])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

 /*  if (isLoading) {
    return <Spinner />
  } */

  return (
    <Form className='logregForm' onSubmit={handleSubmit}>
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
