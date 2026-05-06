import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

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
        <Link className="nav.link" to="/">{Logo()}</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/tv-shows" className="nav-link">TV Shows</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#link">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#link">KIDS</Nav.Link>
            <Nav.Link href="#link">
              <IoIosNotifications className="fs-3" />
            </Nav.Link>
            <NavDropdown title="USER" id="nav-dropdown" align="end">
              <Link className="dropdown-item" to="/profilePage">Profile Page</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
