import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

//Funcionalidad para que algunas rutas sólo se muestren si tiene el usuario el role= Farmer

function IsFarmer(props) {
  const { user } = useContext(AuthContext);
  if (user.role === "farmer") {
    return props.children;
  }
}

export default IsFarmer;
