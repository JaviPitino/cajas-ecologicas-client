import { createContext, useEffect, useState } from "react";
import { verifyService } from '../services/auth.services';

const AuthContext = createContext()

function AuthWrapper(props) {

    // Estados y funciones
    const [ isLogin, setIsLogin ] = useState(false)
    const [ user, setUser ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    const authenticateUser = async () => {
        setIsLoading(true)

        try {

            // Llamamos a la ruta de Verify
            const response = await verifyService()
            // Comprobamos con console.log
            console.log("Token válido")
            console.log("El payload es:", response.data)
            setIsLogin(true)
            setUser(response.data)
            setIsLoading(false)

        } catch(error) {
            setIsLogin(false)
            setUser(null)
            setIsLoading(false)
        }
    }

    const passedContext = {
        isLogin,
        user,
        authenticateUser
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    if ( isLoading === true ) {
        return <div> <h3> Verificando Usuario </h3> </div>
    }

    // Envolvemos a toda la APP
    return (

        <AuthContext.Provider value={passedContext} >
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthWrapper }