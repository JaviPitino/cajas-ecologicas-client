import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function NavbarTop() {

    const { isLogin, user, authenticateUser } = useContext(AuthContext)

    const toggleStyles = (navInfo) => {
        return navInfo.isActive === true ? activeStyles : inactiveStyles;
    };

    const activeStyles = {
        textDecoration: 'none',
        fontWeight: 'bolder'
    }

    const inactiveStyles = {
        textDecoration: 'none',
    }

  return (
    // <div>

    //   <nav>
    //     <NavLink to="/" style={toggleStyles}> Home </NavLink>
    //     <NavLink to="/signup" style={toggleStyles}> Registro </NavLink>
    //     <NavLink to="/login" style={toggleStyles}> Accede </NavLink>
    //     <NavLink to="/profile" style={toggleStyles}> Perfil </NavLink>
    //   </nav>
    //  </div>
    <div className="NavbarTop">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarTop