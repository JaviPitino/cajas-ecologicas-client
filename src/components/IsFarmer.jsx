import React from 'react'
import { useContext }  from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/auth.context'

function IsFarmer(props) {  
  const { user } = useContext(AuthContext)  
  if (user.role === "farmer"){    
    return props.children  
  }
}

export default IsFarmer