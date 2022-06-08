import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import IsFarmer from "./IsFarmer";
import IsClient from "./IsClient";


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
                <Nav.Link href="/alimentos">Productos De la Huerta</Nav.Link>
                <IsFarmer>  
                  <Nav.Link href="/cajas/create"> Crear EcoCajas </Nav.Link>
                  <Nav.Link href="/cajas"> Mis Ecocajas </Nav.Link>
                </IsFarmer>
                <IsClient>  
                  <Nav.Link href="/cliente"> Resumen </Nav.Link>
                  <Nav.Link href="/:id/cliente"> Mis Ecocajas </Nav.Link>
                </IsClient>
            </Nav>
              <Nav>
                <Nav.Link href="/profile">
                  <p>{(user.username).toUpperCase()} </p>
                </Nav.Link>
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
