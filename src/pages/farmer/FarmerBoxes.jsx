import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { findBoxesService } from '../../services/box.services'
import { AuthContext } from "../../context/auth.context";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function FarmerBoxes() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const [ farmerHaveBox, setFarmerHaveBox ] = useState([])
  const [ allBoxes, setAllBoxes ] = useState([])


  useEffect(() =>{
    getBoxesByFarmer()
  }, [])

    const getBoxesByFarmer = async () => {

      console.log(user._id)

    try {

      const response = await findBoxesService()
      setAllBoxes(response.data)
      console.log("DATA", response.data)
      console.log("Este es el logueado", user._id)

  
    } catch (error) {
      navigate('/error')
    }
  }

 

  if (!allBoxes) {
    return <h3>...Loading...</h3>
  }
  return (
    <div>
     {
      allBoxes.map((eachBox) => {
         return (

            <li>  {user._id === eachBox.farmer && eachBox.name} </li> 

         )
       })
     }
    </div>
  )
}

export default FarmerBoxes


{/* <Link to={'/cajas/create'}> <h5 >No tienes ninguna caja creada</h5> <Button> Crea tu caja </Button> </Link> */}