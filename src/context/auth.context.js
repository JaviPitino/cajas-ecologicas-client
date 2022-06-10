import { createContext, useEffect, useState } from "react";
import { useStateManager } from "react-select";
import { verifyService } from "../services/auth.services";

//Componente Contexto para controlar lo que se muetra

const AuthContext = createContext();

function AuthWrapper(props) {
  // Estados y funciones
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState(null);
  const authenticateUser = async () => {
    setIsLoading(true);

    try {
      // Llamamos a la ruta de Verify
      const response = await verifyService();
      // Comprobamos con console.log
      setIsLogin(true);
      setUser(response.data);
      setIsLoading(false);
      setRole(response.data.role);
      return response.data.role;
    } catch (error) {
      setIsLogin(false);
      setUser(null);
      setIsLoading(false);
      setRole(null);
    }
  };

  const passedContext = {
    isLogin,
    user,
    authenticateUser,
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  if (isLoading === true) {
    return (
      <div>
        {" "}
        <h3> Verificando Usuario </h3>{" "}
      </div>
    );
  }

  // Envolvemos a toda la APP para controlar la Autenticación
  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
