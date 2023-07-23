import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import './logreg.css'
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createData, getData } from '../redux/features/data/dataSlice'
import { toast } from 'react-toastify'


export default function AddUser() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        address:""
      })
    
      const { name, email, phone, address } = formData
    
      const navigate = useNavigate()
      const dispatch = useDispatch()
    
      //const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
      //const { user, isError, isSuccess, message } = useSelector((state) => state.auth)
      const { user } = useSelector((state) => state.auth)

      const userID = JSON.parse(localStorage.getItem('user'))
      //console.log("newww addUser: ",userID.id);

      useEffect(() => {
        /* if(isError){
          toast.error(message)
        }
        if(isSuccess || user){
          navigate('/')
        } */
        if(!user){
            navigate('/login')
          }
    
        //dispatch(reset())
      
        
        
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
        //dispatch(getData())
        navigate('/')
       
      }
    
     /*  if (isLoading) {
        return <Spinner />
      } */
    
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
