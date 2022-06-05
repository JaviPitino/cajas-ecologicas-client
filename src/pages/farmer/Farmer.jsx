import React, { useEffect, useState, useNavigate, createContext } from 'react'
import { Link } from 'react-router-dom'
import { oneFarmerService } from '../../services/farmers.services'
import { Button } from 'react-bootstrap'
import { verifyService } from '../../services/auth.services'


function Farmer(props) {
  
  const [ user, setUser ] = useState("")
  // const navigate = useNavigate()
  // // const { _id } = user
  // const [ farmerInfo, setFarmerInfo ] = useState(null)
  useEffect(()=> {
    getFarmerInfo()
  },[])

  const getFarmerInfo = async () => {
    try {
      const response = await verifyService()
      setUser(response.data)
      console.log(response.data.role)
      // const info = await oneFarmerService(_id)
      // setFarmerInfo(info.data)
    } catch (error) {
      
    }
    
  }

  

  return (
    <div>
        Farmer
      {/* <Link to={`/${_id}`}>Cajas</Link> */}
      <Link to="/alimentos"><Button>Alimentos</Button></Link>
    </div>
  )
}

export default Farmer