import { Container, Navbar, Nav,NavDropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const MyNavbar = function () {
  const Logo = () => (
    <svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" height="60">
      <style>{`
      .logo-text {
        font-family: 'Arial Black', sans-serif;
        font-size: 90px;
        font-weight: 900;
        fill: #E50914;
        letter-spacing: -2px;
      }
    `}</style>
      <text x="340" y="145" textAnchor="middle" className="logo-text">
        NETFLIX
      </text>
    </svg>
  );
  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand href="#home">{Logo()}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">TV Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently added</Nav.Link>
            <Nav.Link href="#link">MyList</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#link"><FaSearch/></Nav.Link>
            <Nav.Link href="#link">KIDS</Nav.Link>
            <Nav.Link href="#link"><IoIosNotifications className="fs-3"/></Nav.Link>
            <NavDropdown title="USER" id="nav-dropdown">
                <NavDropdown.Item>Ciao</NavDropdown.Item>
                <NavDropdown.Item>Come</NavDropdown.Item>
                <NavDropdown.Item>stai</NavDropdown.Item>
                <NavDropdown.Item>oggi
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
