import React, { useEffect, useState, useNavigate } from 'react'
import { Link } from 'react-router-dom'
import { oneFarmerService } from '../../services/farmers.services'

function Farmer() {
  const navigate = useNavigate()
  // const { _id } = req.payload
  const [ farmerInfo, setFarmerInfo ] = useState(null)
  useEffect(()=> {

  },[])

  const getFarmerInfo = async () => {
    try {
      // const info = await oneFarmerService(_id)
      // setFarmerInfo(info.data)
    } catch (error) {
      
    }
    
  }

  return (
    <div>Farmer
      {/* <Link to={`/${_id}`}>Cajas</Link> */}
    </div>
  )
}

export default Farmer