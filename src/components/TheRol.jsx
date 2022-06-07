import React from 'react'
import { useContext }  from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/auth.context'

function TheRol(props) {
  const { user } = useContext(AuthContext)
  if (user.role === "farmer"){
    return props.children
  }
  if (user.role === "client"){
    return (
      <Navigate to='/cliente'/>,
      props.children
    )
  }else{
    return <Navigate to='/login' />
  }
}

export default TheRol