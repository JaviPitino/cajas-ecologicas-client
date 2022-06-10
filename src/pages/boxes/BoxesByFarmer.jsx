import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { findBoxesIdFarmer } from "../../services/box.services";
import { Link } from "react-router-dom";
import { Card, Button, Spinner } from "react-bootstrap";

//Página para mostrar las Boxes que el Farmer ha creado, esta vista es para los clientes

function BoxesByFarmer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [allBoxesByFarmer, setallBoxesByFarmer] = useState();

  useEffect(() => {
    getBoxesByFarmer();
  }, []);

  //Obtenemos las Boxes del Farmer por el id

  const getBoxesByFarmer = async () => {
    try {
      const boxesFarmer = await findBoxesIdFarmer(id);
      setallBoxesByFarmer(boxesFarmer.data);
    } catch (error) {
      navigate("/");
    }
  };

  if (!allBoxesByFarmer) {
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

  //Renderizamos las Boxes que tiene ese Farmer, si no ha creado ninguna saldra un mensaje de aviso

  return (
    <div className="box-container">
      <Card className="card-container">
        {allBoxesByFarmer.length === 0 ? (
          <Link to={"/cliente"}>
            {" "}
            <h5>Este agricultor no tiene EcoCajas creadas</h5>{" "}
          </Link>
        ) : (
          allBoxesByFarmer.map((eachBox) => {
            return (
              <>
                <Card.Img variant="top" />
                <Card.Body>
                  <Link className="link" to={`/cajas/${eachBox._id}`}>
                    <img src={eachBox.image} alt="imagen caja" />
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
      <br />

      <Link className="link-btn" to={"/cliente"}>
        {" "}
        <Button variant="success"> Volver </Button>{" "}
      </Link>
    </div>
  );
}

export default BoxesByFarmer;
