import service from "./config.services"

const getAllFoodsService = () => {
  return service.get('/alimentos')
}

const addNewFoodService = (newFood) => {
  return service.post('/alimentos')
}

const getFoodDetailsService = (id) => {
  return service.get(`/alimentos/${id}`)
}

const deleteFoodService = (id) => {
  return service.delete(`/alimentos/${id}`)
}

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