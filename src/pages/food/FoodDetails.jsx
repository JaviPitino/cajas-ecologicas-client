import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getFoodDetailsService } from "../../services/foods.services";

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

  return (
    <div>
      FoodDetails
      {foodDetails.name}
      <div>
        <img src={foodDetails.image} alt="" />
      </div>
      <div>
        {/* {(foodDetails.season).map((eachSeason) => {
          return <li>{eachSeason}</li>;
        })} */}
      </div>
    </div>
  );
}

export default FoodDetails;
