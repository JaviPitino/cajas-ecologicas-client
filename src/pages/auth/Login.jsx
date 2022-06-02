import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { loginService } from '../../services/auth.services'
import { AuthContext } from "../../context/auth.context"

function Login() {

 // UseContext
 const { authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate();

  // Creamos los estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  // Eventos Handlers
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
  e.preventDefault();

    const user = {
        email,
        password
    }
  

    try {

        // Validar al usuario
        const response = await loginService(user)

        // Guardar el Token en el localStorage
        localStorage.setItem("authToken", response.data.authToken)
        authenticateUser()
        navigate("/cliente")


    } catch (error) {

        if (error.response.status === 400 || error.response.status === 401) {
            setErrorMessage(error.response.data.errorMessage)
        } else {
            navigate("/error");
        }
    }
  }

  return (
    <div>
      <h1> Acceder </h1>

      <form onSubmit={handleLogin}>
        <label>Correo Electrónico: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label>Contraseña: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />

        { errorMessage !== null && <p> {errorMessage} </p> }

        <button type="submit"> Accede </button>
      </form>
    </div>
  );
}

export default Login;
