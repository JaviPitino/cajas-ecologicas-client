import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  editBoxesService,
  detailsBoxesService,
} from "../../services/box.services";
import { getAllFoodsService } from "../../services/foods.services";
import { Spinner, Button, Form } from "react-bootstrap";

//Página para editar las Boxes. Sólo tienen acceso el Farmer que creo la Box

function BoxEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [boxmodel, setBoxmodel] = useState([]);
  const [foods, setFoods] = useState([]);
  const [allFoods, setAllFoods] = useState([]);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleSizeChange = (e) => setBoxmodel(e.target.value);
  const handleBoxmodelChange = (e) => setBoxmodel(e.target.value);
  const handleFoodsChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFoods(value);
  };

  //Mandamos la información a actualizar a la DB

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const theBox = {
        name,
        price,
        boxmodel,
        foods,
      };
      await editBoxesService(id, theBox);
      navigate(`/cajas/${id}`);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getBoxDetails();
  }, []);

  //Obtenemos los detalles de la Box a modificar

  const getBoxDetails = async () => {
    try {
      const response = await detailsBoxesService(id);
      const { name, price, boxmodel, foods } = response.data;
      setName(name);
      setPrice(price);
      setBoxmodel(boxmodel);
      setFoods(foods);
      const responseFood = await getAllFoodsService();
      setAllFoods(responseFood.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!allFoods) {
    return (
      <Button variant="primary" disabled>
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

  //Renderizamos el Formulario para la edición de la BOx

  return (
    <div key={id} className="form-center container-fluid">
      <div className="row col-4 map_section">
        <h4> Edita tu EcoCaja </h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <label htmlFor="name" >Nombre</label> */}
            <Form.Control
              type="text"
              name="nombre"
              onChange={handleNameChange}
              placeholder={name}
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
            Guardar{" "}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BoxEdit;
