import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllFoodsService } from "../../services/foods.services";
import Search from "../../components/Search";
import { Button, Card } from "react-bootstrap";

function FoodsList() {
  const navigate = useNavigate();
  const [listFoods, setListFoods] = useState([]);
  const [allFoodsToDisplay, setAllFoodsToDisplay] = useState([]);
  const [allFarmers, setAllFarmers] = useState([]);
  useEffect(() => {
    getAllFoods();
  }, []);

  const getAllFoods = async () => {
    try {
      const response = await getAllFoodsService();
      // console.log(response.data)
      setListFoods(response.data);
      setAllFoodsToDisplay(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  // Handler Search
  const searchList = (search) => {
    const filterArr = listFoods.filter((eachFood) => {
      return eachFood.name.toUpperCase().includes(search.toUpperCase());
    });
    setAllFoodsToDisplay(filterArr);
  };

  const handleSort = () => {
    const foodCopyList = [...allFoodsToDisplay];
    foodCopyList.sort((elem1, elem2) => (elem1.name > elem2.name ? 1 : -1));
    setAllFoodsToDisplay(foodCopyList);
  };

  return (
    <div className="App">
      <Search searchList={searchList} />{" "}
      <Button variant="success" onClick={handleSort}>

        {" "}
        Ordenar alimentos{" "}
      </Button>
      <br />
      <br />
      <div className="foodLi">
        {allFoodsToDisplay.map((eachFood) => {
          return (

            <Card
                className="foodDet"
                border="dark"
                style={{ width: "12rem" }}
              >
                <Card.Header>
                  <Link
                    className="list-client"
                    to={`/alimentos/${eachFood._id}`}
                  >
                    {eachFood.name}
                  </Link>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Link
                      className="list-client"
                      to={`/alimentos/${eachFood._id}`}
                    >
                      <img
                        src={eachFood.image}
                        width={"70px"}
                        alt={eachFood.name}
                      />
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
          );
        })}
      </div>
    </div>
  );
}

export default FoodsList;
