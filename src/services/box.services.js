import service from './config.services'


//Añadimos una nueva Box, creada por un Farmer
const addNewBoxService = (newBox) => {
  return service.post('/cajas/create', newBox)
}
//Buscamos todas las cajas de la DB
const findBoxesService = () => {
  return service.get(`/cajas`)
}
//Buscamos cajas segun el id del Farmer
const findBoxesIdFarmer = (idFarmer) => {
  return service.get(`cajas/${idFarmer}/cajas`)
}
//Mostramos los detalles de la caja
const detailsBoxesService = (idBox) => {
  return service.get(`/cajas/${idBox}`)
}
//Editamos cajas creadas
const editBoxesService = (id, box) => {
  return service.patch(`/cajas/${id}`, box)
}
//Borramos cajas
const deleteBoxService = (id) => {
  return service.delete(`/cajas/${id}`)
}

//Eliminar Food de la Caja
const deleteFoodInBoxService = (id, _id) =>{
  return service.patch(`cajas/${id}/deleteFood`, _id)
}

export {
  addNewBoxService,
  findBoxesService,
  detailsBoxesService,
  editBoxesService,
  deleteBoxService,
  findBoxesIdFarmer,
  deleteFoodInBoxService
}