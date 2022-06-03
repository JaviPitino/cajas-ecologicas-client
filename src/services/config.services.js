import axios from "axios";

// Llamadas al Backend
const service = axios.create({
    baseURL: "http://localhost:5005/api"
})

// Aquí se envía el Token al Backend
service.interceptors.request.use((config) =>  {

    // Busca el Token en localStorage
    const authToken = localStorage.getItem("authToken")

    if ( authToken ) {
        config.headers = {
            authorization: `Bearer ${authToken}`
        }
    }
    return config
})

export default service;