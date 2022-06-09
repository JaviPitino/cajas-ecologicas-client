import service from "./config.services.js";

//Servicio para registrar Usuario
const signupService = (user) => {
    return service.post("/auth/signup", user)
}
//Servicio para logear a un usuario
const loginService = (user) => {
    return service.post("/auth/login", user)
}
//Autenticación del Usuario
const verifyService = () => {
    return service.get("/auth/verify")
}
//Servicio para editar el perfil
const editProfileService = (id, updateUser) => { 
    return service.patch(`/profile/${id}/edit`, updateUser)
}
//Mostramos detalles del perfil de Usuario
const getProfileDetailsService = (id) => { 
    return service.get(`/profile/${id}`)
}

export { signupService, loginService, verifyService, editProfileService, getProfileDetailsService }