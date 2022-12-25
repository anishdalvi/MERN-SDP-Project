import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarBootstrap() {
  return (
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
            <Nav.Link href="">Login</Nav.Link>
            <Nav.Link href="">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;