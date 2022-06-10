import service from "./config.services";
//Mostramos las Boxes de un Usuario Client
const clientBoxesService = () => {
  return service.get(`cajas/miscajas`);
};

export { clientBoxesService };
