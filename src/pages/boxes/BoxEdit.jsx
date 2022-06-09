import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { editBoxesService, detailsBoxesService } from "../../services/box.services";
import { getAllFoodsService } from "../../services/foods.services";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Spinner, Button } from 'react-bootstrap'

function BoxEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState(0);
  const [ boxmodel, setBoxmodel ] = useState([]);
  const [ foods, setFoods ] = useState([]);
  const [ allFoods, setAllFoods ] = useState([]);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleBoxmodelChange = (e) => setBoxmodel(e.target.value);
  const handleFoodsChange = (e) => 
  { const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setFoods(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const theBox = {
        name,
        price,
        boxmodel,
        foods,
      };
      await editBoxesService(id, theBox);
      navigate(`/cajas/${id}`);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getBoxDetails();
  }, []);

  const getBoxDetails = async () => {
    try {
      const response = await detailsBoxesService(id);
      const { name, price, boxmodel, foods } = response.data;
      setName(name);
      setPrice(price);
      setBoxmodel(boxmodel);
      setFoods(foods)
      const responseFood = await getAllFoodsService();
      setAllFoods(responseFood.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!allFoods) {
    return <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
  }

  return (
    <div key={id}>
      BoxEdit
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" >Nombre</label>
        <input
          type="text"
          name="nombre"
          value={name}
          onChange={handleNameChange}
        />
        <br />
                
        <label htmlFor="boxmodel" >Tamaño Ecocaja</label>
        {/* <select name="tamaño" ></select> */}
        <input
          type="text"
          name="boxmodel"
          value={boxmodel}
          onChange={handleBoxmodelChange}
          
        />

        <label htmlFor="price" >Precio</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={handlePriceChange}
          
        />
        <div>
          <div>
          <select 
              name="foods"
              multiple
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
            {/* <Select
            closeMenuOnSelect={false}
            components={makeAnimated}
            defaultInputValue={allFoods[0]}
            isMulti
            name="foods"
            options={allFoods}
            /> */}
          </div>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default BoxEdit;
