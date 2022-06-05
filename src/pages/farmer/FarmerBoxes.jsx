import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { findBoxesByFarmerService } from '../../services/box.services'


function FarmerBoxes() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ boxesByFarmer, setBoxesByFarmer ] = useState([])
  useEffect(() =>{
    getBoxesByFarmer()
  }, [])
  const getBoxesByFarmer = async () => {
    try {
      const response = await findBoxesByFarmerService(id)
      console.log(response.data)
      setBoxesByFarmer(response.data)
    } catch (error) {
      navigate('/error')
    }
    
  }
  return (
    <div>Boxes</div>
  )
}

export default FarmerBoxes