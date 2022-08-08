import api from './api'

export async function listFuels() {
    return await api.get(`/fuel`)
        .then(response => {
            return response.data
        }).catch(error => {
            throw error.response;
        }) 
}
