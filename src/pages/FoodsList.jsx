import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { getAllFoodsService } from '../services/foods.services'


function FoodsList() {

  const navigate = useNavigate()
  const [ allFoods, setAllFoods ] = useState([])
  const [ allFarmers, setAllFarmers ] = useState([])  
  useEffect(() => {
    getAllFoods()
    
  }, [])

  const getAllFoods = async () => {
    try {
      const response = await getAllFoodsService()
      console.log(response.data)
      setAllFoods(response.data)
    } catch (error) {
      navigate('/error')
    }
  }

  return (
    <div>
      <h4>Alimentos</h4>
        {
          allFoods.map((eachFood) => {
            return (
              <Link to={`/alimentos/${eachFood._id}`}>
                <div><img src={eachFood.image} alt={eachFood.name} /></div>
                <div>{eachFood.name}</div>
                <br />
                </Link>
            )
          })
        }
        
    </div>
  )
}

export default FoodsList