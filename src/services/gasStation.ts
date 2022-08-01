import { Address, Distance, Fuel } from '../models/GasStation';
import api from './api'

interface GasStation {
    name: string,
    address: Address
    fuels: Fuel[]
}

export async function listGasStations() {
    return await api.get(`/gas_station`)
        .then(response => {

            let temp : GasStation[] = [];
            
            response.data.forEach((object:  any) => {

                if(object.gasStation.address.latitude != null) {

                    temp.push({
                        name: object.gasStation.name,
                        address: {
                            street: object.gasStation.address.street,
                            latitude: parseFloat(object.gasStation.address.latitude),
                            longitude: parseFloat(object.gasStation.address.longitude)
                        },
                        fuels: object.fuels
                    })

                }
            })
            
            return temp;

        }).catch(error => {
            throw error.response;
        }) 
}

export async function listGasStationsByDistance(longitude: number, latitude: number) {
    return await api.get(`/gas_station/closest?latitude=${latitude}&longitude=${longitude}`)
        .then(response => {
        
            let temp : {name: string, distance: Distance}[] = [];
            
            response.data.forEach((object:  any) => {

                if(object.gasStation.address.latitude != null) {
                    temp.push({
                        name: object.gasStation.name,
                        distance: {
                            text: object.distance.text,
                            value: parseInt(object.distance.value)
                        }
                    })
                }

            })
            
            return temp;

        }).catch(error => {
            throw error.response;
        })
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
                street: 'RUA ALICE MENEZES DOS SANTOS, 45', 
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
                street: 'RUA JOAO ALVES DE OLIVEIRA, 327', 
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
                street: 'RUA QUEBRA QUILOS, 47', 
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
                street:  'RUA EPITACIO PESSOA, 350',
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