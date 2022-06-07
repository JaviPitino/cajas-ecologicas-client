import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function NavbarTop() {
  const { isLogin, user, authenticateUser } = useContext(AuthContext);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  return (
    <div className="NavbarTop">
      {isLogin === true ? (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/alimentos">De la Huerta</Nav.Link>
                <Nav.Link href="/cajas/create"> EcoCajas </Nav.Link>
                <NavDropdown title="Menu" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
                  <NavDropdown.Item href="/infocajas">
                    Mis cajas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link onClick={handleLogOut} href="/">
                  Cerrar sesión
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/alimentos">De la Huerta</Nav.Link>
                <Nav.Link href="/infocajas"> Nuestras Ecocajas </Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/signup">Regístrate</Nav.Link>
                <Nav.Link href="/login">Accede</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
}

export default NavbarTop;
