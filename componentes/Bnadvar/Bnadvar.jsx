import { Link } from 'react-router-dom';
import './Bnadvar.css';

import { Navbar, Nav, NavDropdown, Button  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import LoginPage from '../login/LoginPage';
import RegisterPage from '../registro/RegisterPage';

function Bnadvar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="" className='nav1'>
        <img
              src="https://i.imgur.com/nDEU5bv.jpeg"
              width="120"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home" className='nav1'>Home</Nav.Link>
            <Nav.Link as={Link} to="/formulariol" className='nav1'>Buscador de Lugares</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className='nav1'>Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/Cartas" className='nav1'>Lugares Recomendados</Nav.Link>
            <Nav.Link  as={Link} to="/Registrarse" className='nav1'>Crear cuenta para ver reseñas</Nav.Link>
            <Nav.Link  as={Link} to="/Logearse" className='nav1'>Login para ver reseñas</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bnadvar


