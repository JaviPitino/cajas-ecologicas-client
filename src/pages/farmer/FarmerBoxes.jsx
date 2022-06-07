import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { findBoxesService } from '../../services/box.services'
import { AuthContext } from "../../context/auth.context";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FarmerBoxes() {
  const navigate = useNavigate()
  const [ myBoxes, setMyBoxes ] = useState([])
  useEffect(() =>{
    getBoxes()
  }, [])

  const getBoxes = async () => {
    
    try {
      const response = await findBoxesService()
      setMyBoxes(response.data)
    } catch (error) {
      navigate('/error')
    }
  }

  if (!myBoxes) {
    return <h3>...Loading...</h3>
  }
  return (
    <div>
<<<<<<< HEAD
     {
      allBoxes.map((eachBox) => {
         return (

            <li>  {user._id === eachBox.farmer && eachBox.name} </li> 

         )
       })
     }
=======
    { myBoxes.length === 0 ? (<Link to={'/cajas/create'}> <h5 >No tienes ninguna caja creada</h5> <Button> Crea tu caja </Button> </Link>) 
      : ( myBoxes.map((eachBox) => {
            return (
          <li> {
            <Link to={`/cajas/${eachBox._id}`}>{eachBox.name}</Link>
            }</li>
          )
          }
        )
      )
    }
>>>>>>> 0c26a4b0ce9c7c67faf50ed2d67b4aa8043f4be4
    </div>
  )
}

export default FarmerBoxes


