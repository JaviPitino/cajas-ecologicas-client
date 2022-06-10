import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllFoodsService } from "../../services/foods.services";
import Search from "../../components/Search";
import { Button, Card, Spinner } from "react-bootstrap";

//Página para mostrar un listado de Foods

function FoodsList() {
  const navigate = useNavigate();
  const [listFoods, setListFoods] = useState([]);
  const [allFoodsToDisplay, setAllFoodsToDisplay] = useState([]);

  useEffect(() => {
    getAllFoods();
  }, []);

  //Obtenemos la lista de todos los Foods de la DB

  const getAllFoods = async () => {
    try {
      const response = await getAllFoodsService();
      setListFoods(response.data);
      setAllFoodsToDisplay(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  // Handler Search para realizar busqueda de Foods
  const searchList = (search) => {
    const filterArr = listFoods.filter((eachFood) => {
      return eachFood.name.toUpperCase().includes(search.toUpperCase());
    });
    setAllFoodsToDisplay(filterArr);
  };

  // Handle Sort para ordenar los Foods por nombre
  const handleSort = () => {
    const foodCopyList = [...allFoodsToDisplay];
    foodCopyList.sort((elem1, elem2) => (elem1.name > elem2.name ? 1 : -1));
    setAllFoodsToDisplay(foodCopyList);
  };

  if (!allFoodsToDisplay) {
    return (
      <Button variant="success" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }

  //Renderimas el query de buscador, el botón de ordenar y todos los Foods

  return (
    <div className="App">
      <Search searchList={searchList} />
      <Button variant="success" onClick={handleSort}>
        Ordenar alimentos
      </Button>
      <br />
      <br />
      <div className="foodLi">
        {allFoodsToDisplay.map((eachFood) => {
          return (
            <Card className="foodDet" border="dark" style={{ width: "12rem" }}>
              <Card.Header>
                <Link className="list-client" to={`/alimentos/${eachFood._id}`}>
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
