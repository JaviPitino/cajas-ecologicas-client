import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getFoodDetailsService } from '../../services/foods.services'

function FoodDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [ foodDetails, setFoodDetails ] = useState(null)

  useEffect(() => {
    getFoodDetails()
  },[])
  const getFoodDetails = async () => {
    try {
      const response = await getFoodDetailsService(id)
      setFoodDetails(response.data)
    } catch (error) {
      navigate('/error')
    }
  }

  const season = foodDetails.season

  return (
    <div>FoodDetails
      {foodDetails.name}
      <div>
        <img src={foodDetails.image} alt="" />
      </div>
      {season.map((eachSeason) => {
        return(
          <li>{eachSeason}</li>
        )
      })}
    </div>
  )
}

export default FoodDetails