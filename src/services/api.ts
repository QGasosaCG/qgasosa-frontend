import axios from 'axios'

const api = axios.create({
    baseURL: 'http://3.128.179.40:8080/api/v1'
})

export default api