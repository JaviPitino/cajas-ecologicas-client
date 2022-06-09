import service from "./config.services"
//Mostramos todas las Foods de la DB
const getAllFoodsService = () => {
  return service.get('/alimentos')
}
//Añadimos un nuevo Food a la DB
const addNewFoodService = (newFood) => {
  return service.post('/alimentos',newFood)
}
//Mostramos los detalles de un food en concreto
const getFoodDetailsService = (id) => {
  return service.get(`/alimentos/${id}`)
}
//Eliminamos un food de la DB
const deleteFoodService = (id) => {
  return service.delete(`/alimentos/${id}`)
}
//Editamos una Food (Sólo puede el Admin)
const editFoodService = (id, food) => {
  return service.patch(`/alimentos/${id}`, food)
}

export {
  getAllFoodsService,
  addNewFoodService,
  getFoodDetailsService,
  deleteFoodService,
  editFoodService
}