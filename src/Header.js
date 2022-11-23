import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Igrica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
           
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Game" id="basic-nav-dropdown">
              
              <NavDropdown.Item href="#play-game">Play game</NavDropdown.Item>
              <NavDropdown.Item href="#leaderboard">Leaderboard</NavDropdown.Item>
              <NavDropdown.Divider />
          
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;