import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { findBoxesIdFarmer } from '../../services/box.services'
import { Link } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap'

function BoxesByFarmer() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [ allBoxesByFarmer, setallBoxesByFarmer ] = useState()
  const [ productToBuy, setproductToBuy] = useState(null)
  
  useEffect(() => {
    getBoxesByFarmer()
  }, [])

  const getBoxesByFarmer = async () => {
    try {
      const boxesFarmer = await findBoxesIdFarmer (id)
      setallBoxesByFarmer(boxesFarmer.data)
    } catch (error) {
      navigate('/')
    }
  }

    
  if (!allBoxesByFarmer) return <h3>...Loading</h3>

  return (
  <div className="box-container">
    <Card className="card-container">
      {
      allBoxesByFarmer.map((eachBox) => {
        return (
          <>
            <Card.Img variant="top"/>
              <Card.Body>
                <Link className="link" to={`/cajas/${eachBox._id}`}>
                  <img src={eachBox.image} alt="imagen caja" />
                
              <Card.Title className="boxes-title"> {eachBox.name.toUpperCase()} </Card.Title>
              </Link>
              <Card.Text className="boxes-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi odit velit soluta et quas voluptatibus quos ullam cumque dicta omnirupti?
              </Card.Text>
              </Card.Body>
          </>
        )
      })   
      }            
    </Card>
      <br />
      
    <Link className="link-btn" to={"/alimentos"}> <Button variant="success" to={"/alimentos"}> Volver </Button> </Link>
    </div>
  )
}

export default BoxesByFarmer