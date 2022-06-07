import service from './config.services'

const addNewBoxService = (newBox) => {
  return service.post('/cajas/create', newBox)
}

const findBoxesService = () => {
  return service.get(`/cajas`)
}

const findBoxesIdFarmer = (idFarmer) => {
  return service.get(`/${idFarmer}/cajas`)
}

const detailsBoxesService = (idBox) => {
  return service.get(`/cajas/${idBox}`)
}

const editBoxesService = (id, box) => {
  return service.patch(`/cajas/${id}`, box)
}

const deleteBoxService = (id) => {
  return service.delete(`/cajas/${id}`)
}

export {
  addNewBoxService,
  findBoxesService,
  detailsBoxesService,
  editBoxesService,
  deleteBoxService,
  findBoxesIdFarmer
}