interface Address {
    name: string,
    longitude: number,
    latitude: number
}

interface Fuel {
    name: string,
    price: number
}

export default class GasStation {

    #id: string
    #name: string
    #address: Address
    #fuels: Fuel[]

    constructor(id: string, name: string, address: Address, fuels: Fuel[]) {
        this.#id = id;
        this.#name = name;
        this.#address = address;
        this.#fuels = fuels;
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

    static toGasStation(object: any) : GasStation {
        return new GasStation(object.id, object.name, object.address, object.fuels);
    }

}