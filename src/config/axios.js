import Axios from "axios";

const BASE_URL = 'https://komyut.onrender.com/api/v1/routes';

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axios