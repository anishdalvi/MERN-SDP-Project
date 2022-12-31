import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavbarBootstrap from './components/NavbarBootstrap'
import './App.css'
import Counter from './components/redux-tut/Counter'
import Login from './components/logreg/Login'
import Register from './components/logreg/Register'
import Home from './components/Home';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <Routes>
          <Route path="/" element={<NavbarBootstrap />}>
            
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* { user ? (<Route path="home" element={<Home />} />) : (<Route path='login' element={<Login />} />)} */}
          </Route>
      </Routes> 
      <ToastContainer />
    </>
  )
}

export default App




/* w3 schools
 <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> 
 */

/* Old
      <NavbarBootstrap />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        
      </Routes> 
 */      