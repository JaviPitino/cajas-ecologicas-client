import service from './config.services'
//Mostramos las cajas de un Usuario Cliente
const clientBoxesService = () => {
  return service.get(`cajas/miscajas`)
}

export {
  clientBoxesService
}