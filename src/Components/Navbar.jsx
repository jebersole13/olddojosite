import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation() {
  return (
    
    <Navbar expand="lg" className='bg'>
      <Container >
        <Navbar.Brand href="/">     <img
              src="/ktklogo.png"
              width="80"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
  
            <NavDropdown  title="About" id="basic-nav-dropdown"   >
              <NavDropdown.Item  href="/Ryukyu"> Ryukyu Kempo</NavDropdown.Item>
              <NavDropdown.Item  href="/Kobudo">
           Kobudo
              </NavDropdown.Item>
              <NavDropdown.Item  href="/Bogu">Bogu Kumite</NavDropdown.Item>
              <NavDropdown.Item  href="/Arnis">Arnis</NavDropdown.Item>
              <NavDropdown.Item  href="/Instructor">Instructor</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link   href="Schedule">Schedule</Nav.Link>
            <NavDropdown  title="Media" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/Video">Video</NavDropdown.Item>
              <NavDropdown.Item href="/Pics">
              Pictures
              </NavDropdown.Item>
              <NavDropdown.Item href='/Blog'>Blog</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  href="Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Navigation;