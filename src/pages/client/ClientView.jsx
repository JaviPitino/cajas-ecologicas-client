import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { allFarmersService } from "../../services/farmers.services";
import { getAllFoodsService } from "../../services/foods.services";
import { ListGroup } from 'react-bootstrap'

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
      <div>
        <h4>Escoge tu agricultor</h4>
        {/* <img src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel2_we0fr6.jpg" alt="Campo" /> */}
      </div>
      <div className="container-list-food">
      <div>
        {farmers.map((eachFarmer) => {
          
          return (
            <ListGroup className='list-group'>
              <ListGroup.Item >
                <Link className="list-client"to={`/${eachFarmer._id}/cajas`}>
                  <strong>{eachFarmer.username.toUpperCase()}</strong>
                  <br />
                </Link>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </div>
      <div>
        {foods.map((eachFood) => {
          return (

            <ListGroup className='list-group'>
              <ListGroup.Item >
                <Link className="list-client" to={`/alimentos/${eachFood._id}`}>
                  {eachFood.name} <img src={eachFood.image} width={"30px"} alt="imagen alimento" />
                </Link>
              </ListGroup.Item> 
            </ListGroup>
           
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default ClientView;
