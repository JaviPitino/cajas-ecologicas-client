import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { allFarmersService } from "../../services/farmers.services";
import { getAllFoodsService } from "../../services/foods.services";
import { Card, Button, Spinner } from "react-bootstrap";

// Página del Client, le redireccionamos cuando hace login

function ClientView() {
  const navigate = useNavigate();
  const [farmers, setFarmers] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getAllInfo();
  }, []);

  // Obtenemos lista de Foods y de Farmers para mostrar

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

  if (!farmers || !foods) {
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

  //Renderizamos las dos listas que hemos obtenido, para que el Client puede interactuar

  return (
    <div className="containerCliente">
      <div className="container-list-food">
        <div>
          <Card className="client-border" style={{ width: "12rem" }}>
            {farmers.map((eachFarmer) => {
              return (
                <Link className="list-client" to={`/${eachFarmer._id}/cajas`}>
                  <Card.Body>
                    <Card.Img variant="top" src={eachFarmer.image} />
                    <Card.Title>
                      <strong>{eachFarmer.username.toUpperCase()}</strong>
                    </Card.Title>
                  </Card.Body>
                </Link>
              );
            })}
          </Card>
        </div>
        <div className="foodLi">
          {foods.map((eachFood) => {
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
    </div>
  );
}

export default ClientView;
