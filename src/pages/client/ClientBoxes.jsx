import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { clientBoxesService } from "../../services/client.services";
import { Button, Card, Spinner } from "react-bootstrap";

//Página para mostrar las Boxes que el Client ha adquirido

function ClientBoxes() {
  const navigate = useNavigate();
  const [clientBoxes, setClientBoxes] = useState([]);

  useEffect(() => {
    getBoxesByClient();
  }, []);

  //Obtenemos las Boxes que el Client ha comprado

  const getBoxesByClient = async () => {
    try {
      const response = await clientBoxesService();
      setClientBoxes(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!clientBoxes) {
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

  //Renderizamos las Boxes puede interactuar con ellas para que le muestren los detalles.

  return (
    <div className="box-container">
      <Card className="card-container">
        {clientBoxes.length === 0 ? (
          <Link to={"/cliente"}>
            {" "}
            <h5>No has comprado ninguna caja</h5>{" "}
            <Button variant="success">Compra tu caja</Button>
          </Link>
        ) : (
          clientBoxes.map((eachBox) => {
            return (
              <>
                <Card.Img variant="top" />
                <Card.Body>
                  <Link className="link" to={`/cajas/${eachBox._id}`}>
                    <img src={eachBox.image} alt="caja" />
                    <Card.Title className="boxes-title">
                      {" "}
                      {eachBox.name.toUpperCase()}
                    </Card.Title>
                  </Link>
                  <Card.Text className="boxes-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis animi odit velit soluta et quas voluptatibus quos
                    ullam cumque dicta omnirupti?
                  </Card.Text>
                </Card.Body>
              </>
            );
          })
        )}
      </Card>
    </div>
  );
}

export default ClientBoxes;
