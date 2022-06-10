import service from "./config.services";
//Mostramos lista de todos los Farmers
const allFarmersService = () => {
  return service.get("/agricultores");
};
//Mostramos un Farmer segun ID
const oneFarmerService = (id) => {
  return service.get(`/agricultor`, id);
};

export { allFarmersService, oneFarmerService };
