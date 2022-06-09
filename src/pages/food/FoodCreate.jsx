import React, { useState } from "react";
import { useNavigate } from "react-router";
import { addNewFoodService } from "../../services/foods.services";
import { Form, Button } from "react-bootstrap";
import { uploadService } from "../../services/profile.services";

function FoodCreate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [season, setSeason] = useState([]);
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleSeasonChange = (e) => setSeason(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);

  const handleSubmit = async (e) => {
    try {
      const newFood = {
        name,
        season,
        type,
        image,
      };
      await addNewFoodService(newFood);
      navigate("/alimentos");
    } catch (error) {
      navigate("/error");
    }
  };

  const handleImageChange = async (e) => {
    const uploadForm = new FormData();
    uploadForm.append("image", e.target.files[0]);

    try {
      const response = await uploadService(uploadForm);
      setImage(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div className="form-center container-fluid">
      <div className="row col-4 map_section">
        <h3>Añadir Alimento</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              onChange={handleNameChange}
              value={name}
              placeholder="Nombre"
            />
          </Form.Group>
          <Form.Select
            onChange={handleTypeChange}
            htmlFor="type"
            defaultValue="Fruta"
          >
            <option>Elije el tipo</option>
            <option value="Fruta">Fruta</option>
            <option value="Verdura">Verdura</option>
          </Form.Select>
          <br />
          <Form.Select htmlFor="season" onChange={handleSeasonChange}>
            <option>Elije la Temporada</option>
            <option value="Verano">Verano</option>
            <option value="Primavera">Primavera</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
          </Form.Select>
          <br />
          <Form.Group className="mb-3">
            <Form.Control
              type="file"
              id="img"
              name="image"
              onChange={handleImageChange}
            />
          </Form.Group>
          <img width={"150px"} src={image} alt="imagen perfil" />
          <br />
          <Button type="submit" variant="success">
            Agregar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FoodCreate;
