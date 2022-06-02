import axios from "axios";

// Llamadas al Backend
const service = axios.create({
    baseUrl: "http://localhost:5005/api"
})

// Aquí se envía el Token al Backend
service.interceptors.request.use((config) =>  {

    // Busca el TOken en localStorage
    const authToken = localStorage.getItem("authToken")

    if ( authToken ) {
        config.headers = {
            authorization: `Bearer ${authToken}`
        }
    }
    return config
})

export default service;