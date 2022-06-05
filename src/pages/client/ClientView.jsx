import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { allFarmersService } from "../../services/farmers.services";
import { getAllFoodsService } from "../../services/foods.services";

function ClientView() {
  const navigate = useNavigate();
  const [farmers, setFarmers] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getAllInfo();
  }, []);

  const getAllInfo = async () => {
    try {
      const listfoods = await getAllFoodsService();
      const listfarmers = await allFarmersService();
      setFarmers(listfarmers.data);
      setFoods(listfoods.data);
    } catch (error) {
      navigate("/error");
    }
  };


  //! AQUI TENDREMOS UN CONDICIONAL SEGUN LA IDE DEL PAYLOAD Y SI TIENE CAJAS EL CLIENTE EN LA DB

  return (
    <div>
      ClientView
      <div>
        {farmers.map((eachFarmer) => {
          
          return (
            <Link to={`/agricultores/${eachFarmer._id}/cajas`}>
              <li>{eachFarmer.username}</li>
            </Link>
          );
        })}
      </div>
      <div>
        {foods.map((eachFood) => {
          return (
            <Link to={`/alimentos/${eachFood._id}`}>
              <li>{eachFood.name}</li>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ClientView;
