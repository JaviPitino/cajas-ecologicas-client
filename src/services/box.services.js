import service from "./config.services";

//Añadimos una nueva Box, creada por un Farmer
const addNewBoxService = (newBox) => {
  return service.post("/cajas/create", newBox);
};
//Buscamos todas las Boxes de la DB
const findBoxesService = () => {
  return service.get(`/cajas`);
};
//Buscamos Boxes segun el id del Farmer
const findBoxesIdFarmer = (idFarmer) => {
  return service.get(`cajas/${idFarmer}/cajas`);
};
//Mostramos los detalles de la Box
const detailsBoxesService = (idBox) => {
  return service.get(`/cajas/${idBox}`);
};
//Editamos Boxes creadas
const editBoxesService = (id, box) => {
  return service.patch(`/cajas/${id}`, box);
};
//Borramos Boxes
const deleteBoxService = (id) => {
  return service.delete(`/cajas/${id}`);
};

//Eliminar Food de la Box
const deleteFoodInBoxService = (idBox, idFood) => {
  return service.patch(`/cajas/${idBox}/${idFood}/deleteFood`);
};

export {
  addNewBoxService,
  findBoxesService,
  detailsBoxesService,
  editBoxesService,
  deleteBoxService,
  findBoxesIdFarmer,
  deleteFoodInBoxService,
};
