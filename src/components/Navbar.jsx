import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/auth.context"

function Navbar() {

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
    <div>

      <nav>
        <NavLink to="/" style={toggleStyles}> Home </NavLink>
        <NavLink to="/signup" style={toggleStyles}> Registro </NavLink>
        <NavLink to="/login" style={toggleStyles}> Accede </NavLink>
        <NavLink to="/profile" style={toggleStyles}>Perfil</NavLink>
      </nav>
      {/* { user !== null && <p> Bienvenido: <strong> {user.username} </strong> </p> }

      { isLogin === true ? (
        <nav>
          <NavLink to="/" style={toggleStyles}> Home </NavLink>
        </nav>
      ) : (
        <nav>
          <NavLink to="/signup" style={toggleStyles}> Registro </NavLink>
          <NavLink to="/login" style={toggleStyles}> Accede </NavLink>
        </nav>
      )} */}
    </div>
  )
}

export default Navbar