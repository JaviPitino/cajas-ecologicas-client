import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signupService } from "../../services/auth.services";
import axios from "axios";

function Signup() {

  const navigate = useNavigate();

  // Creamos los estados
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  // Eventos handlers
  const handleUsernameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    const user = { username, email, password };
    console.log(user)
    try {
      await signupService(user);
      navigate("/login");
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div>
      <h3>Regístrate</h3>

      <form onSubmit={handleSignup}>
        <label>Nombre: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <label> Correo Electrónico: </label>
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

        {errorMessage !== null && <p>{errorMessage}</p>}

        <button type="submit"> Registrar </button>
      </form>
    </div>
  );
}

export default Signup;
