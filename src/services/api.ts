import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API;

const api = axios.create({
    baseURL: url
})

export default api