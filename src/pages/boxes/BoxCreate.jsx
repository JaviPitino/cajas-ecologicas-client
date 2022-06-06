import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addNewBoxService } from '../../services/box.services'
import { getAllFoodsService } from '../../services/foods.services'
import { verifyService } from '../../services/auth.services';
import { Button } from 'react-bootstrap'

function BoxCreate() {
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
      navigate('/')
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
      setAllFoods(response.data)
    } catch (error) {
      navigate('/error')
    }
  }

  return (
    <div>
      <h3> Añadir Caja</h3>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={handleNameChange}
          placeholder="Nombre"
        />
        <br />
        <input
          type="num"
          name="price"
          onChange={handlePriceChange}
          placeholder="Precio"
        /> <span>€</span>
        <br />  
        <div>
          <div>
            <select 
              name="foods"
              multiple={true}
              onChange={handleFoodsChange}
              > 
              {allFoods.map((eachFood)=> {
                return(
                  <>
                  <option value={eachFood._id}>
                    {eachFood.name}
                  </option>
                  </>
                )
              })}
              </select>
                
              </div>
            </div>

          <Button variant="success" type="submit">Agregar</Button>
        </form>
      </div>
  )
}

export default BoxCreate