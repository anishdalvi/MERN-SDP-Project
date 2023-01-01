import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createData } from '../redux/features/data/dataSlice'
import { toast } from 'react-toastify'

export default function updateData() {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    address:""
  })
  const { user } = useSelector((state) => state.auth)
  const { name, email, phone, address } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
   
    if(!user){
        navigate('/login')
      }
    
  }, [user])



  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    //const user1 = user.id
    const addUserData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      
    }

    dispatch(createData(addUserData))
   
  }



  return (
        <Form className='logregForm' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} value={email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" name="phone" onChange={handleChange} value={phone} />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" name="address" value={address} onChange={handleChange}/>
          </Form.Group>
          
          <div className='bottom-form'>
            <Button variant="danger" type="submit">
              Add User
            </Button>
          </div>
        </Form>
  )
}
