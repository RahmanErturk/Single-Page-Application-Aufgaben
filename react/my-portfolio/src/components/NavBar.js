import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            my Portfolio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-icon"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </Nav.Link>
            <Link className="nav-link" to="/Projects">
              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Divider />
                <p className="text-center mt-1 mb-1" bg="dark">
                  Front End
                </p>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">HTML</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">CSS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  JavaScript
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">React</NavDropdown.Item>
                <NavDropdown.Divider />
                <p className="text-center mt-1 mb-1">Back End</p>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Node</NavDropdown.Item>
              </NavDropdown>
            </Link>
            <Nav.Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
