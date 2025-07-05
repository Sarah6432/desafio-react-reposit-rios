import axios from "axios";

//cria instância do axios
 const api = axios.create({
    baseURL: "https://api.github.com",
})

export default api;