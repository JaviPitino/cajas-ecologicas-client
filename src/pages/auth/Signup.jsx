import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";
import { Button, Form } from "react-bootstrap"
import Login from "./Login";


function Signup() {

  const navigate = useNavigate();

  // Creamos los estados
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFarmer, setIsFarmer] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  // Eventos handlers
  const handleUsernameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleIsFarmerChange = (e) => setIsFarmer(!isFarmer)

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(isFarmer)
    let youFarmer="";
    if (isFarmer === true ){
      youFarmer = "farmer"
    }else {
      youFarmer = "client"
    }
        const user = { username, email, password, role:youFarmer};
    
    try {
      await signupService(user);
      // navigate('/login')
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
  
    <div className="containerregistro">
      <div className="Registro">
        <h3>Regístrate</h3>
      </div>
      

      <form className="formregistro" onSubmit={handleSignup}>
        <div className="check">
          <span> Si tienes un huerto y eres <strong>agricultor</strong> marca aquí &nbsp;</span>
          <label className="switch">
            <input input type="checkbox" 
              name="farmer"
              onChange={handleIsFarmerChange}
              checked={isFarmer}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="nameregistro">
          <label>Nombre: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="email">
          <label> Tu Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="pass">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="error">
          {errorMessage !== null && <p>{errorMessage}</p>}
        </div>
        <div className="botonregistro">
          <Button variant="success" type="submit" ><Login/></Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
