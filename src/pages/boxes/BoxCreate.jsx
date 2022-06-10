import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addNewBoxService } from "../../services/box.services";
import { getAllFoodsService } from "../../services/foods.services";
import { verifyService } from "../../services/auth.services";
import { Button, Form, Spinner } from "react-bootstrap";

//Página para la creación de una nueva Box

function BoxCreate() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [foods, setFoods] = useState([]);
  const [farmer, setFarmer] = useState("");
  const [boxmodel, setBoxmodel] = useState("");
  const [allFoods, setAllFoods] = useState([]);

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleSizeChange = (e) => setBoxmodel(e.target.value);
  const handleFoodsChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFoods(value);
  };

  //Funcionalidad para mandar los datos de la nueva Box a la BE y guardar en la DB

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBox = {
        name,
        price,
        boxmodel,
        foods,
        farmer: farmer,
      };
      const response = await verifyService();
      setFarmer(response.data._id);
      await addNewBoxService(newBox);
      navigate(`/cajas`);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getAllFoods();
  }, []);

  //Funcionalidad para obtener todas las Foods que vamos a mostrar para añadir a la Box

  const getAllFoods = async () => {
    try {
      const response = await getAllFoodsService();
      setAllFoods(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!allFoods) {
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

  //Renderizamos el Formulario con el que añadiremos una nueva Box

  return (
    <div className="form-center container-fluid">
      <div className="row col-4 map_section">
        <h3> Añadir caja </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="nombre"
              onChange={handleNameChange}
              placeholder="Nombre"
            />
          </Form.Group>
          <Form.Select onChange={handleSizeChange}>
            <option>Selecciona el tamaño de tu Ecocaja</option>
            <option>Pequeña</option>
            <option>Mediana</option>
            <option>Grande</option>
          </Form.Select>
          <br />
          <Form.Control
            type="number"
            name="price"
            onChange={handlePriceChange}
            placeholder="Precio €"
          />
          <div>
            <div>
              <Form.Select name="foods" multiple onChange={handleFoodsChange}>
                {allFoods.map((eachFood) => {
                  return (
                    <>
                      <option value={eachFood._id}>{eachFood.name}</option>
                    </>
                  );
                })}
              </Form.Select>
              <br />
            </div>
          </div>

          <Button variant="success" type="submit">
            {" "}
            Agregar{" "}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BoxCreate;
