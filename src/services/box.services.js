import service from './config.services'

const addNewBoxService = (newBox) => {
  return service.post('/cajas/create', newBox)
}

const findBoxesByFarmerService = (id) => {
  return service.get(`/${id}/cajas`)
}

const detailsBoxesService = (id) => {
  return service.get(`cajas/${id}`)
}

const editBoxesService = (id, box) => {
  return service.patch(`/cajas/${id}`, box)
}

const deleteBoxService = (id) => {
  return service.delete(`/cajas/${id}`)
}

export {
  addNewBoxService,
  findBoxesByFarmerService,
  detailsBoxesService,
  editBoxesService,
  deleteBoxService
}