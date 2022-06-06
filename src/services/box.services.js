import service from './config.services'

const addNewBoxService = (newBox) => {
  return service.post('/cajas/create', newBox)
}

const findBoxesByIdService = (id) => {
  return service.get(`/cajas/${id}`)
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
  findBoxesByIdService,
  detailsBoxesService,
  editBoxesService,
  deleteBoxService
}