import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateData } from '../redux/features/data/dataSlice'
import { toast } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'

export default function UpdateUser() {

  const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);  

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
    const updateUserData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      
    }

    dispatch(updateData(updateUserData))
   
  }



  return (
        <Form className='updateForm' onSubmit={handleSubmit}>
          <Modal backdrop="static" show={show} onHide={modalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Static Backdrop Modal</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>This Modal will not close when clicking outside it.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={modalClose}>Close Modal</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>  
          
          <div className='bottom-form'>
            <Button variant="danger" type="submit">
              Update User
            </Button>
          </div>
        </Form>
  )
}
