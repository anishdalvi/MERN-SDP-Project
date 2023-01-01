import React from 'react'
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../redux/features/auth/authSlice'
import Table from 'react-bootstrap/Table';
import Spinner from './Spinner'
import '../App.css'

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
   

    if(!user){
      navigate('/login')
    }
    
    return () => {
      dispatch(reset())
    }

  } , [user, navigate, dispatch] )

  console.log("Here in Home : ", user);

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}> <h1>Hello {user && (user.name)} </h1>
      <Container>
        <Table striped bordered hover variant='light' >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              {/* <td colSpan={2}>Larry the Bird</td> */}
              <td>@twitter</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>

  )
}
