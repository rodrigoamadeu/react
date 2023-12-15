import axios from "axios";
// https://viacep.com.br/ws/   == criação da base url vai buscar o cep no site abaixo - essa base url não vai mudar.

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"    
});

export default api;