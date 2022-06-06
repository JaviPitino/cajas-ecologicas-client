import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getProfileDetailsService } from '../../services/auth.services'
import { AuthContext } from "../../context/auth.context";

function Profile() {

  const { authenticateUser, user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [ profileDetails, setProfileDetails ] = useState(null)

  useEffect(() => {
    getProfileDetails()
  },[])

  const getProfileDetails = async () => {
    try {
      const response = await getProfileDetailsService(user._id)
      setProfileDetails(response.data)
      console.log(response.data)
    } catch (error) {
      navigate('/error')
    }
  }
  
  return (
    <div>
      <h3>Perfil del Usuario git push </h3>
      {/* <h4>Usuario: {profileDetails.username}</h4>
      <Link to={`/profile/${id}/edit`}><button>Editar Perfil</button></Link> */}
      <Link to={`/`}><button>Editar Perfil</button></Link>
    </div>
  )
}

export default Profile