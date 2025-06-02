import axios from 'axios';
import url from "./backend"

export const api = axios.create({
    baseURL: url
    // timeout: 1000 * 10,
})

export const bozpayApi = axios.create({ baseURL: "https://api.pay.agenciaboz.com.br" })