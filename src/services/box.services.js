import service from './config.services'

const addNewBoxService = (newBox) => {
  return service.post('/cajas/create', newBox)
}

export {
  addNewBoxService
}