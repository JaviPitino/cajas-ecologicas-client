import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";
import { AuthContext } from "../../context/auth.context";
import { Button } from "react-bootstrap";

function Login() {
  // UseContext
  const { authenticateUser, user } = useContext(AuthContext);

  
  const navigate = useNavigate();

  // Creamos los estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  // Eventos Handlers
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleLogin = async (e) => {
    e.preventDefault();

    const userIdentity = {
      email,
      password,
    };

    try {
      // Validar al usuario
      const response = await loginService(userIdentity);
      // Guardar el Token en el localStorage
      localStorage.setItem("authToken", response.data.authToken);
      console.log(user.role)
      setRole(user.role);
      authenticateUser();
      
      console.log(user)
      //! CONDICIONAL PARA REDIRECCIONAR SEGUN EL ROL DEL USUARIO QUE SE LOGEA
      if (role === "farmer") {
        navigate("/agricultor");
      }
      if (role === "client") {
        navigate("/cliente");
      }
    } catch (error) {
      console.log(error)
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="form-center container-fluid">
          <div className="row col-4 map_section">
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              placeholder="Correo Electrónico"
              onChange={handleEmailChange}
            />
            <br />
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              placeholder="Inserte su contraseña"
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        {errorMessage !== null && <p> {errorMessage} </p>}

        <Button variant="success" type="submit">
           Accede
        </Button>

      </form>
    </div>
  );
}

export default Login;
