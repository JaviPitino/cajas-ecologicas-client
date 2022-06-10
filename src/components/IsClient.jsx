import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

//Funcionalidad para que algunas rutas sólo se muestren si tiene el usuario el role= Client

function IsClient(props) {
  const { user } = useContext(AuthContext);
  if (user.role === "client") {
    return props.children;
  }
}

export default IsClient;
