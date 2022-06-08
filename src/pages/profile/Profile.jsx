import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getProfileDetailsService } from '../../services/auth.services'
import { AuthContext } from "../../context/auth.context";

function Profile() {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [ profileDetails, setProfileDetails ] = useState(null)
  
  useEffect(() => {
    getProfileDetails()
  },[])

  const getProfileDetails = async () => {
    try {
      const response = await getProfileDetailsService(user._id)
      setProfileDetails(response.data)
    } catch (error) {
      navigate('/error')
    }
  }
  if (!profileDetails ) {
    return <h3>...Loading...</h3>
  }
  
  return (
    <div>
      <h3> Bienvenido: <strong>{profileDetails.username}</strong>  </h3>
      <img src={profileDetails.image} alt="imagen perfil" width={200}/>
      <Link to={`/profile/${profileDetails._id}/edit`}><button>Editar Perfil</button></Link>
    </div>
  )
}

export default Profile