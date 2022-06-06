import React from 'react'
import { useContext }  from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/auth.context'

function IsClient(props) {
  const { user } = useContext(AuthContext)
  if (user.role === "client"){
    return props.children
  }else if (user.role === "farmer"){
    return <Navigate to='/cliente'/>
  }else{
    return <Navigate to='/login' />
  }
}

export default IsClient