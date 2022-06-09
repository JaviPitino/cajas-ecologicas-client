import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { AuthContext } from "../../context/auth.context";

function Farmer() {
  const { user } = useContext(AuthContext);
  
  
  return (
    <div>
      <h3> Hola: {user.username} </h3>
      <div className="img-farmer-bg">
        <img src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654800173/EcoFood/fondo-soyfarmer_pegzav.jpg" alt="Imagen Farmer" />
      </div>
      <div className="btns-farmer">
      <Link to="/cajas"><Button variant="success" > Mis Eco Cajas </Button></Link>
      <Link to="/alimentos"><Button variant="success" >Alimentos</Button></Link>
      </div>
    </div>
  )
}

export default Farmer