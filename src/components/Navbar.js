// Bootstraps
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
    <Navbar expand="lg" className="navbar bg-body-primary">
      <Container fluid>
        <Navbar.Brand className="navbar-brand" href="#">Bauenneun</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="custom-toggler"/>
        <Navbar.Offcanvas className="background-offcanvas"
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton className='background-offcanvas navbar-text navbar-link'>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className='background-offcanvas title-offcanvas'>
              Bauenneun
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Nav.Link className="navbar-text navbar-link" href="#home">Startseite</Nav.Link>
              <Nav.Link className="navbar-text navbar-link " href="#models-house">Unsere Hausmodelle</Nav.Link>
              <Nav.Link className="navbar-text navbar-link" href="#woweare">Wer wir sind</Nav.Link>
              <Nav.Link className="navbar-text navbar-link" href="#why">Was wir tun & warum</Nav.Link>
              <Nav.Link className="navbar-text navbar-link" href="#questions">FAQs</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
