import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { addNewFoodService } from '../../services/foods.services'

function FoodCreate() {
  const navigate = useNavigate()
  
  const [ name, setName ] = useState("")
  const [ season, setSeason ] = useState([])
  const [ type, setType ] = useState ("")
  const [ image, setImage ] = useState("") 

  const handleNameChange = (e) => setName(e.target.value)
  const handleSeasonChange = (e) => setSeason(e.target.value)
  const handleTypeChange = (e) => setType(e.target.value)
  // const handleImageChange tiene que ser con Cloudinary Service

  const handleSubmit = async (e) => {
    try {
      const newFood = {
        name,
        season,
        type,
        image
      }
      await addNewFoodService(newFood)
    } catch (error) {
      navigate('/error')
    }
  }


  return (
    <div>FoodCreate

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text"
          name="name"
          onChange={handleNameChange}
          value={name}/>

        <select htmlFor="type"
        defaultValue="Fruta"
        multiple="true"
        onChange={handleTypeChange}
        >
          <option value="fruta">Fruta</option>
          <option value="verdura">Verdura</option>
        </select>
        
        <select htmlFor="season"
        defaultValue="Verano"
        multiple="true"
        onChange={handleSeasonChange}
        >
          <option value="verano">Verano</option>
          <option value="primavera">Primavera</option>
          <option value="otoño">Otoño</option>
          <option value="invierno">Invierno</option>
        </select>
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default FoodCreate