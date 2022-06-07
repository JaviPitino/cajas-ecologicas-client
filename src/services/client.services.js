import service from './config.services'

const clientBoxesService = (id) => {
  return service.get(`/${id}/cliente`)
}

export {
   clientBoxesService
}