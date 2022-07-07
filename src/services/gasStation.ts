import api from './api'

export async function listGasStations() {

    // return await api.get(`/gas_station/list`)
    //     .then(response => {
    //         return response.data;
    //     }).catch(error => {
    //         throw error.response;
    //     }) 

    return [
        {
            id: 10,
            name: 'JOSEFA VANIA MEIRA DE FREITAS',
            address: { 
                name:  'RUA EPITACIO PESSOA, 350',
                longitude: -35.8903657,
                latitude:  -7.2141857
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
        {
            id: 11,
            name: 'DJ COMBUSTIVEIS LTDA',
            address: { 
                name: 'RUA JOAO ALVES DE OLIVEIRA, 327', 
                longitude: -35.8865126, 
                latitude:  -7.2132129
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
        {
            id: 12,
            name: 'BARROS COMERCIO DE COMBUSTIVEL E CONVENIENCIA LTDA',
            address: { 
                name: 'RUA QUEBRA QUILOS, 47', 
                longitude: -35.8777024, 
                latitude: -7.2209854
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
        {
            id: 13,
            name: 'RODOPARAIBA COMERCIO DE COMBUSTIVEIS LTDA',
            address: { 
                name: 'RUA ALICE MENEZES DOS SANTOS, 45', 
                longitude: -35.927565, 
                latitude: -7.2556841
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        }
    ]

}

export async function listGasStationsByDistance(size: number, longitude: number, latitude: number) {

    // return await api.get(`/gas_station/closest?size=${size}&lat=${latitude}&long=${longitude}`)
    //     .then(response => {
    //         return response.data;
    //     }).catch(error => {
    //         throw error.response;
    //     })  
    
    return [
        {
            id: 10,
            name: 'JOSEFA VANIA MEIRA DE FREITAS',
            address: { 
                name:  'RUA EPITACIO PESSOA, 350',
                longitude: -35.8903657,
                latitude:  -7.2141857
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
        {
            id: 11,
            name: 'DJ COMBUSTIVEIS LTDA',
            address: { 
                name: 'RUA JOAO ALVES DE OLIVEIRA, 327', 
                longitude: -35.8865126, 
                latitude:  -7.2132129
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
        {
            id: 13,
            name: 'RODOPARAIBA COMERCIO DE COMBUSTIVEIS LTDA',
            address: { 
                name: 'RUA ALICE MENEZES DOS SANTOS, 45', 
                longitude: -35.927565, 
                latitude: -7.2556841
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
        {
            id: 12,
            name: 'BARROS COMERCIO DE COMBUSTIVEL E CONVENIENCIA LTDA',
            address: { 
                name: 'RUA QUEBRA QUILOS, 47', 
                longitude: -35.8777024, 
                latitude: -7.2209854
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        }
    ]

}

export async function listGasStationsByPrice(size: number) {

    // return await api.get(`/gas_station/cheapest?size=${size}`)
    //     .then(response => {
    //         return response.data;
    //     }).catch(error => {
    //         throw error.response;
    //     })    

    return [
        {
            id: 13,
            name: 'RODOPARAIBA COMERCIO DE COMBUSTIVEIS LTDA',
            address: { 
                name: 'RUA ALICE MENEZES DOS SANTOS, 45', 
                longitude: -35.927565, 
                latitude: -7.2556841
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
        {
            id: 11,
            name: 'DJ COMBUSTIVEIS LTDA',
            address: { 
                name: 'RUA JOAO ALVES DE OLIVEIRA, 327', 
                longitude: -35.8865126, 
                latitude:  -7.2132129
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
        {
            id: 12,
            name: 'BARROS COMERCIO DE COMBUSTIVEL E CONVENIENCIA LTDA',
            address: { 
                name: 'RUA QUEBRA QUILOS, 47', 
                longitude: -35.8777024, 
                latitude: -7.2209854
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
        {
            id: 10,
            name: 'JOSEFA VANIA MEIRA DE FREITAS',
            address: { 
                name:  'RUA EPITACIO PESSOA, 350',
                longitude: -35.8903657,
                latitude:  -7.2141857
            },
            fuels: [
                { 
                    name: 'GASOLINA COMUM',
                    price: 7.50
                }, 
                {
                    name: 'OLEO DIESEL',
                    price: 7.50
                },
                {
                    name: 'GLP',
                    price: 7.50
                }
            ]
        },
    ]

}