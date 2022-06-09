import service from './config.services'
//Servicio para subir foto de perfil a Cloudinary
const uploadService = (uploadForm) => {
  return service.post('/uploader', uploadForm)
}

export { uploadService }