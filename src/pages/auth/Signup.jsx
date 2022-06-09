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
    // <div className="form-center container-fluid">
    //   <div className="row col-4 map_section">
    //     <h3>Regístrate</h3>
    //       <Form onSubmit={handleSignup}>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Control type="text"
    //           name="username"
    //           value={username}
    //           onChange={handleUsernameChange} placeholder="Introduzca su nombre de usuario" />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Control type="email" placeholder="Enter email" />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Control type="password"
    //           name="password"
    //           value={password}
    //           onChange={handlePasswordChange} placeholder="Inserte su contraseña" />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //         <Form.Check type="checkbox" label="Si eres agricultor marca esta casilla"
    //           name="farmer"
    //           onChange={handleIsFarmerChange}
    //           checked={isFarmer}/>
    //          {errorMessage !== null && <p>{errorMessage}</p>}
    //       </Form.Group>
    //       <Button variant="success" type="submit" ><Login/></Button>
    //     </Form>
    //   </div>
    // </div>

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
        
        <Button variant="success" type="submit" ><Login/></Button>
      </form>
    </div>
  );
}

export default Signup;
