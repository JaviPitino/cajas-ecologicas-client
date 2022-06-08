import service from './config.services'

const clientBoxesService = () => {
  return service.get(`cajas/miscajas`)
}

export {
  clientBoxesService
}