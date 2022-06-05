import service from './config.services'

const allFarmersService = () => {
  return service.get('/agricultores')
}

const oneFarmerService = (id) => {
  return service.get(`/agricultor`)
}


export {
  allFarmersService,
  oneFarmerService
}