import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link} from 'react-router-dom'



function NavbarBootstrap() {
  return ( <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
        <Container>
          <Navbar.Brand href="#home">SDP MERN Stack</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link href="">Features</Nav.Link>
              <Nav.Link href="">Pricing</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
          <Outlet />
    </>
  );
}

export default NavbarBootstrap;