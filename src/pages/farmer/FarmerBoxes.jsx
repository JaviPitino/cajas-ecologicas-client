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
    { myBoxes.length === 0 ? (<Link to={'/cajas/create'}> <h5 >No tienes ninguna caja creada</h5> <Button> Crea tu caja </Button> </Link>) 
      : ( myBoxes.map((eachBox) => {
            return (
          <div> 
            <Link to={`/cajas/${eachBox._id}`}><img src={eachBox.image} alt="caja" /> <br />{eachBox.name}</Link>
          </div>
          )
          }
        )
      )
    }
    </div>
  )
}

export default FarmerBoxes


