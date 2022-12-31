import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../redux/features/auth/authSlice'
import Spinner from './Spinner'

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



  return (
    <div style={{textAlign:"center", marginTop:"100px"}}> <h1>Hello {user && (user.name || user.data.name)} </h1>
       
    </div>

  )
}
