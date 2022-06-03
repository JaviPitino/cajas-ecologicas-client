import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addNewBoxService } from '../services/box.services'
import { getAllFoodsService } from '../services/foods.services'
import { verifyService } from '../services/auth.services';

function BoxCreate(props) {
  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState(0);
  const [ foods, setFoods ] = useState([]);
  const [ farmer, setFarmer ] = useState("");
  const [ allFoods, setAllFoods ] = useState([]);

  const navigate = useNavigate()

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleFoodsChange = (e) => setFoods(e.target.value);
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newBox = {
        name, price, foods, farmer: farmer
      }
      const response = await verifyService()
      setFarmer(response.data._id)
      await addNewBoxService(newBox)
      props.getAllBoxes()
    } catch (error) {
      navigate('/error')
    }
  }

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

  const viewFoods = () => {
    
  }

  console.log(allFoods)
  return (
    <div>
      <h3> Añadir Caja</h3>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="nombre"
          onChange={handleNameChange}
          value={name}
        />

        <label htmlFor="price">Precio</label>
        <input
          type="num"
          name="price"
          onChange={handlePriceChange}
          value={price}
        />

        <div>
          <div>
            <select defaultValue={allFoods[0]}
              isDisable={false}
              isLoading={false}
              isClearable={true}
              isRtl={false}
              isSearchable={true}
              name="foods"
              multiple="true"
              > 
              {allFoods.map((eachFood)=> {
                return(
                  <>
                  <option value={eachFood.name}>
                    {eachFood.name}
                  </option>
                  </>
                )
              })}
              </select>
                
              </div>
            </div>

        <button type="submit">Agregar</button>




        </form>
      </div>
  )
}

export default BoxCreate