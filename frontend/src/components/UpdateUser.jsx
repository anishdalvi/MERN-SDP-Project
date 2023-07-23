import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateData } from '../redux/features/data/dataSlice'
import { toast } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'

export default function UpdateUser({ show, close, id, data}) {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    address:""
  })
  const { user } = useSelector((state) => state.auth)
  //const  data  = useSelector((state) => state.data)
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
    const updateUserData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      
    }

    dispatch(updateData(updateUserData))
   
  }
  //console.log(id);
  //console.log(data.datas.map((id) => ({ id })));

  console.log(typeof data);
  console.log(data.name);

  return (
        <Form className='updateForm' onSubmit={handleSubmit}>
          <Modal backdrop="static" show={show} onHide={close}>
            <Modal.Header closeButton>
              <Modal.Title style={{color: 'black', fontWeight: 'bold'}} >Update User Data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={data.name} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} value={data.email} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number" name="phone" onChange={handleChange} value={phone} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" name="address" value={address} onChange={handleChange} />
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={close}>Close Modal</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>  
          
          
        </Form>
  )
}
