import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../redux/features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import '../App.css'



function NavbarBootstrap() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)

  const handleLogout = () => {
    //console.log("logout action called");
    dispatch(logout())
    //navigate('/login')
}

  return ( 
    <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
              <Container>
                <Navbar.Brand href="/">User Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                  <Nav className="me-auto">
                    { user ? (<Nav.Link as={Link} to="/addUser">Add User</Nav.Link>) : (<Nav.Link></Nav.Link>) }
                    
                    
                  </Nav>
                  <Nav>
                    { user ? (
                       <Nav.Link> <button type='button' id='logout-btn' onClick={handleLogout}> Logout </button></Nav.Link> 
                    ) : (
                      
                      <>
                      <Nav.Link as={Link} to="/login">Login</Nav.Link>
                      <Nav.Link as={Link} to="/register">Register</Nav.Link>
                      </>
                    )}
                     
                    
                  </Nav>
                </Navbar.Collapse>
              </Container>
          </Navbar>
          <Outlet />
    </>
  );
}

export default NavbarBootstrap;