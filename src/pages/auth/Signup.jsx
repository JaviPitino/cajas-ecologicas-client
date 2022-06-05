import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";
import { Button } from "react-bootstrap"


function Signup() {

  const navigate = useNavigate();

  // Creamos los estados
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFarmer, setIsFarmer] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Eventos handlers
  const handleUsernameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleIsFarmerChange = (e) => setIsFarmer(e.target.checked)

  const handleSignup = async (e) => {
    e.preventDefault();

    const user = { username, email, password };

    try {
      await signupService(user);
      navigate('/login')
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
      <span> Si tienes un huerto y eres <strong>agricultor</strong> marca aquí &nbsp;</span>

      <label className="switch">
        <input input type="checkbox" 
          name="farmer"
          onChange={handleIsFarmerChange}
          checked={isFarmer}
          />
        <span className="slider"></span>
      </label>
      <br />
 
      
        <br />
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
      <br />
      
        <Button variant="success" type="submit"> Registrar </Button>
      </form>
    </div>
  );
}

export default Signup;
