import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { AuthContext } from "../../context/auth.context";

function Farmer() {
  const { user } = useContext(AuthContext);
  
  
  return (
    <div>
      <h3>SOY FARMER(quitar esto)</h3>
      <Link to="/cajas"><Button variant="success" > Mis Eco Cajas </Button></Link>
      <Link to="/alimentos"><Button variant="success" >Alimentos</Button></Link>
    </div>
  )
}

export default Farmer