import { useContext }  from 'react'
import { AuthContext } from '../context/auth.context'
import { Navigate } from 'react-router-dom'

//Creamos la función para hacer que algunas rutas sean privadas

function IsPrivate(props) {
  const { isLogin } = useContext(AuthContext)
  if (isLogin === true){
    return props.children
  }else{
    return <Navigate to='/login' />
  }
}

export default IsPrivate