import axios from "axios";


const instance = axios.create({
    baseURL: `https://api.kinopoisk.dev/v1`,
    headers: {"X-API-KEY": "VSGKCT3-ZYB42JM-KGYM34K-CD769YH"}
})

export default instance