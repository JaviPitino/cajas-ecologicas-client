import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getFoodDetailsService } from "../../services/foods.services";
import { Button, Card } from 'react-bootstrap'

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
      <div className="card-fruits">
      <Card className="card-border" style={{ width: '16rem' }}>
        <Card.Img className="img-pad" variant="top" src={foodDetails.image} alt="image" />
        <Card.Body>
          <Card.Title>Temporada</Card.Title>
          <Card.Text>
          {
          foodDetails.season.map((eachFood) => {
            return (
              <div>
    
              <li className="link"><strong>{eachFood}</strong></li>
              </div>
              )
            })
          }
          </Card.Text>
          <Link className="link-btn" to={"/alimentos"}> <Button variant="success" to={"/alimentos"}> Volver </Button> </Link>
        </Card.Body>
      </Card>
      </div>

      {/* <div>
        <img src={foodDetails.image} alt="image" />
      </div>
      <div>
        {/* {foodDetails.season} */}
        {/* <br />
        <p>Temporada:</p>
        {
          foodDetails.season.map((eachFood) => {
          return (
            <div>
   
            <li className="link"><strong>{eachFood}</strong></li>
            </div>
            )
          })
        }
        
          <Link className="link-btn" to={"/alimentos"}> <br /> <Button variant="success" to={"/alimentos"}> Volver </Button> </Link>
      </div> */}


    </div>
  );
}

export default FoodDetails;
