import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export const api2 = 'http://192.168.1.222:8080/'

export default api;
