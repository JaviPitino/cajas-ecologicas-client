import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { editBoxesService, detailsBoxesService } from "../../services/box.services";
import { getAllFoodsService } from "../../services/foods.services";

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
  const handleFoodsChange = (e) => setFoods(e.target.value);

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
      navigate(`/cajas/${id}/details`);
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
      console.log(foods)
      const responseFood = await getAllFoodsService();
      setAllFoods(responseFood.data);
    } catch (error) {
      navigate("/error");
    }
  };

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
        <label htmlFor="boxmodel">Pequeña</label>
        <input
          type="checkbox"
          name="boxmodel"
          onChange={handleBoxmodelChange}
        />
        
        <label htmlFor="boxmodel">Mediana</label>
        <input
          type="checkbox"
          name="boxmodel"
          onChange={handleBoxmodelChange}
        />
        
        <label htmlFor="boxmodel">Grande</label>
        <input
          type="checkbox"
          name="boxmodel"
          onChange={handleBoxmodelChange}
        />
        <br />

        <label htmlFor="price" >Precio</label>
        <input
          type="num"
          name="price"
          value={price}
          onChange={handlePriceChange}
          
        />
        <div>
          <div>
            {/* <label htmlFor="foods">{foods.map((eachFood) => {
                return (
                  <>
                    <li>{eachFood.name}</li>
                  </>
                );
              })}</label>
              <br /> */}
            <select
              defaultValue={allFoods[0]}
              name="foods"
              multiple="true"
              onChange={handleFoodsChange}>

              {allFoods.map((eachFood) => {
                return (
                  <option value={eachFood.name}>{eachFood.name}</option>
                );
              })}
            </select>
          </div>
        </div>
        <button type="submit">Editar</button>
      </form>
    </div>
  );
}

export default BoxEdit;
