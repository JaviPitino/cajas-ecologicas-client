import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getProfileDetailsService } from '../services/auth.services'

function Profile() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [ profileDetails, setProfileDetails ] = useState(null)

  useEffect(() => {
    getProfileDetails()
  },[])

  const getProfileDetails = async () => {
    try {
      const response = await getProfileDetailsService(id)
      setProfileDetails(response.data)
      console.log(response.data)
    } catch (error) {
      navigate('/error')
    }
  }

  return (
    <div>
      <h4>Usuario: {profileDetails.username}</h4>
      <Link to={`/profile/${id}/edit`}><button>Editar Perfil</button></Link>
    </div>
  )
}

export default Profile