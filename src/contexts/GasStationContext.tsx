import { createContext, useState } from "react";

interface GasStationContextProps {
    gasStations: any[]
    search: string
    setSearch: (value: string) => void
}

const GasStationContext = createContext<GasStationContextProps>({} as GasStationContextProps);

export function GasStationProvider(props: { children: any}) {

    const [ gasStations, setGasStations ] = useState<any[]>([]);
    const [ search, setSearch ] = useState<string>('');

    return (
        <GasStationContext.Provider value={{
            gasStations,
            search,
            setSearch
        }}>
            {props.children}
        </GasStationContext.Provider>
    )
}

export default GasStationContext;