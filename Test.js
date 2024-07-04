return (
  <>
    {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 navbar">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Bauenneun
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <Nav.Link  className="navbar-text navbar-link"   href="#home">Startseite</Nav.Link>
                <Nav.Link  className="navbar-text navbar-link" href="#models-house">Unsere Hausmodelle</Nav.Link>
                <Nav.Link  className="navbar-text navbar-link" href="#woweare">Wer wir sind</Nav.Link>
                <Nav.Link  className="navbar-text navbar-link" href="#why">Was wir tun & warum</Nav.Link>
                <Nav.Link  className="navbar-text navbar-link" href="#questions">FAQs</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
);
