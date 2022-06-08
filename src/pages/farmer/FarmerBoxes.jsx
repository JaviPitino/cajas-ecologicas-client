import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { findBoxesService } from '../../services/box.services'
import { AuthContext } from "../../context/auth.context";
import { Button, Card } from 'react-bootstrap'
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
    <div className="box-container">
    <Card className="card-container">
    { myBoxes.length === 0 ? (<Link to={'/cajas/create'}> <h5 >No tienes ninguna caja creada</h5> <Button> Crea tu caja </Button> </Link>) 
      : ( myBoxes.map((eachBox) => {
          return (
            <>
            <Card.Img variant="top" />
            <Card.Body>
            <Link className="link" to={`/cajas/${eachBox._id}`}>
              <img src={eachBox.image} alt="imagen caja" />
            <Card.Title className="boxes-title"> {eachBox.name.toUpperCase()}</Card.Title>
            </Link>
            <Card.Text className="boxes-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi odit velit soluta et quas voluptatibus quos ullam cumque dicta omnirupti?
            </Card.Text>
            </Card.Body>
            </>
          )
        }
        )
      )
    }
    </Card>
    </div>
  )

}

export default FarmerBoxes


