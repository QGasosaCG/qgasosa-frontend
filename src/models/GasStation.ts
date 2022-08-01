export interface Address {
    street: string,
    longitude: number,
    latitude: number
}

export interface Fuel {
    name: string,
    price: number
}

export interface Distance {
    text: string,
    value: number
}

export default class GasStation {

    #id: string
    #name: string
    #address: Address
    #fuels: Fuel[]
    #distance: Distance

    constructor(id: string, name: string, address: Address, fuels: Fuel[], distance = { text: '', value: -1}) {
        this.#id = id;
        this.#name = name;
        this.#address = address;
        this.#fuels = fuels;
        this.#distance = distance;
    }
    

    get id(): string { 
        return this.#id
    }

    get name(): string { 
        return this.#name
    }

    get address(): Address { 
        return this.#address
    }

    get fuels(): Fuel[] { 
        return this.#fuels
    }

    get distance() {
        return this.#distance
    }

    set distance(new_value: Distance) {
        this.#distance = new_value
    }

    static toGasStation(object: any) : GasStation {
        return new GasStation(object.id, object.name, object.address, object.fuels, object.distance);
    }

}