import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getFoodDetailsService } from "../../services/foods.services";
import { Button } from 'react-bootstrap'

function FoodDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [foodDetails, setFoodDetails] = useState("");

  useEffect(() => {
    getFoodDetails();
  }, []);
  const getFoodDetails = async () => {
    try {
      const response = await getFoodDetailsService(id);
      setFoodDetails(response.data);
      console.log(response.data.season);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!foodDetails){
    return <h3>...Loading</h3>
  }

  return (
    <div>
      <p>Detalles del producto: <strong> {foodDetails.name} </strong> </p>
      <div>
        <img src={foodDetails.image} alt="image" />
      </div>
      <div>
        {/* {foodDetails.season} */}
        <br />
        {
          foodDetails.season.map((eachFood) => {
          return (
            <li>{eachFood}</li>
            )
          })
        }
        
          <Link className="link-btn" to={"/alimentos"}> <Button variant="success" to={"/alimentos"}> Volver </Button> </Link>
      </div>
    </div>
  );
}

export default FoodDetails;
