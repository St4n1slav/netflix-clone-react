import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons"; // non so quanto tempo ho perso per ricordare che me li devo installare prima
import logo from "../assets/logo.png";

function MyNav() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <NavbarBrand href="#home">
          <Image src={logo} id="logo" />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#shows" className="active fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#movies" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#added" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#list" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-2">
            <Search className="icons mx-2" />
            <div className="icons mx-2 txt">KIDS</div>
            <Bell className="icons mx-2" />
            <PersonCircle className="icons mx-2" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
