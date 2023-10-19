import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react"
import './Navbar.css'


function Navigation() {
  const [menuOpen, setMenuOpen]=useState(false);
  return (
    <nav>
       <div className="menu" onClick={()=> {
      setMenuOpen(!menuOpen)
     }}>
      <span></span>
      <span></span>
      <span></span>
     </div>
     <ul className={menuOpen ? "open" : ''}>
    <Navbar className='bg'>
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
          <Nav className="me-auto">
  <li>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Ryukyu"> Ryukyu Kempo</NavDropdown.Item>
              <NavDropdown.Item href="/Kobudo">
           Kobudo
              </NavDropdown.Item>
              <NavDropdown.Item href="/Bogu">Bogu Kumite</NavDropdown.Item>
              <NavDropdown.Item href="/Arnis">Arnis</NavDropdown.Item>
              <NavDropdown.Item href="/Instructor">Instructor</NavDropdown.Item>
            </NavDropdown>
            </li>
            <li>
            <Nav.Link href="Schedule">Schedule</Nav.Link>
            </li>
            <li>
            <NavDropdown title="Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Video">Video</NavDropdown.Item>
              <NavDropdown.Item href="/Pics">
              Pictures
              </NavDropdown.Item>
              <NavDropdown.Item href="/Blog">Blog</NavDropdown.Item>
            </NavDropdown></li>
            <li>
            <Nav.Link href="Contact">Contact</Nav.Link></li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </ul>
    </nav>
  );
}

export default Navigation;