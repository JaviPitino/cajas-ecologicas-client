import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import IsClient from '../../components/IsClient'
import IsFarmer from '../../components/IsFarmer'
import { detailsBoxesService, deleteBoxService } from '../../services/box.services'


function BoxDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [ boxDetails, setBoxDetails ] = useState(null)
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

  
  
  if (boxDetails === null ){
    return <h3>...Loading</h3>
  }
  
  return (
    <div key={id}>
      {boxDetails.name}

      <h4>Tipo:{boxDetails.boxmodel}</h4>
      {
        boxDetails.foods.map((eachFood) => {
          return(
            
            <div><img src={eachFood.image} alt="" width={70}/>
              <li>{eachFood.name}</li>
            </div>
            
          )
        })
      }
      <IsFarmer><Link to={`/cajas/${id}/edit`}>
        <button>Editar</button>
      </Link>
      <button onClick={handleDelete}>Borrar</button>
      </IsFarmer>
      <IsClient>
      <button >Comprar</button>
      </IsClient>
      
    </div>
  )
}

export default BoxDetails