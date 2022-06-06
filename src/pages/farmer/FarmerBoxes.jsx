import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { findBoxesByIdService } from '../../services/box.services'
import { AuthContext } from "../../context/auth.context";


function FarmerBoxes() {
  const { user } = useContext(AuthContext);
  const { id } = useParams()
  const navigate = useNavigate()
  const [ boxesByFarmer, setBoxesByFarmer ] = useState([])
  useEffect(() =>{
    getBoxesByFarmer()
  }, [])
    const getBoxesByFarmer = async () => {
    try {
      if (user.role === "client"){
        const responseParams = await findBoxesByIdService(id)
        setBoxesByFarmer(responseParams.data)
      }else {
        const response = await findBoxesByIdService(user._id)
        setBoxesByFarmer(response.data)
      }
      

    } catch (error) {
      navigate('/error')
    }
    
  }
  return (
    <div>Boxes</div>
  )
}

export default FarmerBoxes