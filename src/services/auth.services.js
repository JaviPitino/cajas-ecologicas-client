import service from "./config.services.js";


const signupService = (user) => {
    return service.post("/auth/signup", user)
}

const loginService = (user) => {
    return service.post("/auth/login", user)
}

const verifyService = () => {
    return service.get("/auth/verify")
}

const editProfileService = (user) => { // Editar el perfil del usuario
    return service.patch(`/profile/${user.id}/edit`)
}

const getProfileDetailsService = (id) => { // Mostramos los detalles del Perfil del Usuario
    return service.get(`/profile/${id}`)
}

export { signupService, loginService, verifyService, editProfileService, getProfileDetailsService }