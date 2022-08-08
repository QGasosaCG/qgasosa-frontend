import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import Alert from "../components/Alert";
import { listFuels } from "../services/fuel";

type Fuel = {
    name: string
}

interface FuelContextProps {
    fuels: Fuel[]
}

const FuelContext = createContext<FuelContextProps>({} as FuelContextProps);

export function FuelProvider(props: any) {

    const [ fuels, setFuels ] = useState<Fuel[]>([]);

    async function getFuels() {
        let all = await listFuels();
        setFuels(all);
    }

    useEffect(() => {
        (async () => {
            await getFuels()
        })()
    }, [])

    return (
        <FuelContext.Provider value={{
            fuels
        }}>
            {props.children}
        </FuelContext.Provider>
    )
}

export default FuelContext;
