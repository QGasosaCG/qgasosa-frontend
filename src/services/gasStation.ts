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

export async function listGasStationsByPrice(fuelName: string) {
    return await api.get(`/gas_station/cheapest?fuelName=${fuelName}`)
        .then(response => {
            
            let temp : {name: string}[] = [];
            
            response.data.forEach((object:  any) => {
                if(object.gasStation.address.latitude != null) {
                    temp.push({
                        name: object.gasStation.name
                    })
                }
            })
            
            return temp;

        }).catch(error => {
            throw error.response;
        })    
}

export async function listBest(longitude: number, latitude: number, consumption: number) {
    return await api.get(`/gas_station/cheapest?latitude=${latitude}&longitude=${longitude}&consumption=${consumption}`)
        .then(response => {
            
            let temp : {name: string}[] = [];
            
            response.data.forEach((object:  any) => {
                if(object.gasStation.address.latitude != null) {
                    temp.push({
                        name: object.gasStation.name
                    })
                }
            })
            
            return temp;

        }).catch(error => {
            throw error.response;
        })    
}