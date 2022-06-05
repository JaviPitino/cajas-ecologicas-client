import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { getAllFoodsService } from '../../services/foods.services'
import Search from '../../components/Search'

function FoodsList() {

  const navigate = useNavigate()
  const [ listFoods, setListFoods ] = useState([])
  const [ allFoodsToDisplay, setAllFoodsToDisplay ] = useState([])
  const [ allFarmers, setAllFarmers ] = useState([])  
  useEffect(() => {
    getAllFoods()
    
  }, [])

  const getAllFoods = async () => {
    try {
      const response = await getAllFoodsService()
      // console.log(response.data)
      setListFoods(response.data)
      setAllFoodsToDisplay(response.data)
    } catch (error) {
      navigate('/error')
    }
  }

  // Handler Search
  const searchList = (search) => {
    const filterArr = listFoods.filter((eachFood) => {
        return eachFood.name.toUpperCase().includes(search.toUpperCase())
    })
    setAllFoodsToDisplay(filterArr)
  }

  return (
    <div className="App">
      <Search searchList={searchList}/>
      <div>
        {
          allFoodsToDisplay.map((eachFood) => {
            return (
              <div className='container' key={eachFood._id}>
              <Link className="link" to={`/alimentos/${eachFood._id}`}>
                <div><img src={eachFood.image} alt="image" width={80}/></div>
                <div>{eachFood.name}</div>
                <br />
              </Link>
              </div>
            )
          })
        }
        </div>
        
    </div>
  )
}

export default FoodsList