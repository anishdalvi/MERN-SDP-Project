import React from 'react'
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import { reset } from '../redux/features/auth/authSlice'
import Table from 'react-bootstrap/Table';
import Spinner from './Spinner'
import '../App.css'
import { getData, deleteData, reset, updateData } from '../redux/features/data/dataSlice'
//import List from './List';

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const { datas, isLoading, isError, message } = useSelector((state) => state.data)

  useEffect(() => {
    
    if(isError){
      console.log("iserror dash  "+ message)
    }

    if(!user){
      navigate('/login')
    }
    else {
      dispatch(getData())
    }
    

    return () => {
      dispatch(reset())
    }

  } , [user, navigate,message, isError ,dispatch] )

  if (isLoading){
    return <Spinner />
  }
  //console.log("Here in Home : ", user);
  //console.log("Datas :", datas);

  const showData = datas

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}> <h1>Hello {user && (user.name)} </h1>
      <Container>
                <Table striped bordered hover variant='light' >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                      {datas.length > 0 ? (
                        <>
                          {datas.map((data ,index) => (
                            <tr key={index}>
                             <td>{data._id}</td>
                             <td>{data.name}</td>
                             <td>{data.email}</td>
                             <td>{data.phone}</td>
                             <td>{data.address}</td>
                              <td><button onClick={() => navigate('/updateUser')}>Edit</button></td>
                              <td><button onClick={() => dispatch(deleteData(data._id)).then(() => navigate('/addUser'))}>Delete</button></td>
                            </tr>
                          ))}
                        </>
                      ) : ( <tr><td><h3>No Data List</h3></td></tr> )}
                     
                      

                    </tbody>
                </Table>
            </Container>
      

    </div>

  )
}
