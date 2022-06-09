import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import IsClient from '../../components/IsClient'
import IsFarmer from '../../components/IsFarmer'
import { AuthContext } from '../../context/auth.context'
import { detailsBoxesService, deleteBoxService, editBoxesService } from '../../services/box.services'
import  PaymentIntent  from './PaymentIntent'
import { Button, Card } from 'react-bootstrap'
import { deleteFoodInBoxService } from '../../services/box.services'

function BoxDetails() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const { id } = useParams()
  const [ boxDetails, setBoxDetails ] = useState(null)
  const [ productToBuy, setproductToBuy] = useState(null)
  
  useEffect(() => {
    getBoxDetails()
  },[])
  const getBoxDetails = async () => {
    try {
      const response = await detailsBoxesService(id)
      setBoxDetails(response.data)
      } catch (error) {
      navigate('/error')
    }
  }

  const handleDelete = async () => {
    try {
      await deleteBoxService(id)
      navigate('/cajas/create')
    } catch (error) {
      navigate('/error')
    }
  }

  const handleDeleteFood = async (idFood) => {
    try {
      await deleteFoodInBoxService(id, idFood)
      getBoxDetails()      
    } catch (error) {
      navigate('/error')
    }
  }

  const handleBuy = async (productToBuy) => {
    
    try {
      setproductToBuy(productToBuy)
      const updateBox = {
        client: user._id
      }
      await editBoxesService(id, updateBox)
    } catch (error) {
      navigate('/error')
    }
    
  }
  
  
  if (boxDetails === null ){
    return <h3>...Loading</h3>
  }
  
  return (
    <div key={id} className="App">
      <h3> Mi EcoCaja: <strong>{boxDetails.name}</strong>  </h3>

      <h4>Tipo: {boxDetails.boxmodel}</h4>
      <div className="foodLi">
      {
        boxDetails.foods.map((eachFood) => {
          return(
          <Card
            className="foodDet"
            border="dark"
            style={{ width: "12rem" }}
            >
              <Card.Header>
               {eachFood.name}
              </Card.Header>
              <div className='list-client'><img src={eachFood.image} alt="imagen caja" width={70}/>           
                <IsFarmer><Button variant="success" onClick={() => handleDeleteFood(eachFood._id)} >Borrar</Button></IsFarmer>
              </div>
              </Card>
          )
      })
      }
      </div>
      <br />
      <h3> <span> <strong> {boxDetails.price}€</strong></span></h3>
      <IsFarmer><Link to={`/cajas/${id}/edit`}>
        <Button variant="success">Editar</Button>
      </Link>
      <Button variant="success" onClick={handleDelete}>Borrar</Button>
      </IsFarmer>
      <IsClient>
      <Button variant="success" onClick={() => handleBuy(boxDetails)}>Comprar</Button>
      {
        productToBuy &&  
        <><h3>Comprar Ecocaja</h3><PaymentIntent productToBuy={productToBuy}/></>
      }
      </IsClient>
      
    </div>
  )
}

export default BoxDetails