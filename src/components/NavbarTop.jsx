import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import IsFarmer from "./IsFarmer";
import IsClient from "./IsClient";
import Login from "../pages/auth/Login";

//Componente para la navegación y el control de acceso a distintas partes

function NavbarTop() {
  const { isLogin, user, authenticateUser } = useContext(AuthContext);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  //Renderizamos el Componente que estara presente en toda la App

  return (
    <div className="NavbarTop">
      {isLogin === true ? (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="logo" as={NavLink} to="/">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654763561/EcoFood/logoecocajas_opaitp.png"
                height="32"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/alimentos">
                  Productos De la Huerta
                </Nav.Link>
                <IsFarmer>
                  <Nav.Link as={NavLink} to="/cajas/create">
                    {" "}
                    Crear EcoCajas{" "}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/cajas">
                    {" "}
                    Mis Ecocajas{" "}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/alimentos/create">
                    Añadir Alimento
                  </Nav.Link>
                </IsFarmer>
                <IsClient>
                  <Nav.Link as={NavLink} to="/cliente">
                    {" "}
                    Resumen{" "}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/miscajas">
                    {" "}
                    Mis Ecocajas{" "}
                  </Nav.Link>
                </IsClient>
              </Nav>
              <Nav>
                <Nav.Link as={NavLink} to="/profile">
                  <p>{user.username.toUpperCase()} </p>
                </Nav.Link>
                <Nav.Link onClick={handleLogOut} as={NavLink} to="/">
                  Cerrar sesión
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="logo" as={NavLink} to="/">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654763561/EcoFood/logoecocajas_opaitp.png"
                height="32"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/alimentos">
                  De la Huerta
                </Nav.Link>
                <Nav.Link as={NavLink} to="/infocajas">
                  {" "}
                  Nuestras Ecocajas{" "}
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={NavLink} to="/signup">
                  Regístrate
                </Nav.Link>
                <Login />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
}

export default NavbarTop;
