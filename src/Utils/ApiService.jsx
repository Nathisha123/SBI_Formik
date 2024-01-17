import axios from "axios"
const API_URL = 'https://659fd0ac5023b02bfe8a8c92.mockapi.io/user'


const AxiosService = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService