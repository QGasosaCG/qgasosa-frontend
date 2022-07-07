import { createContext, useContext, useEffect, useState } from "react";
import GasStation from "../models/GasStation";
import { listGasStations, listGasStationsByDistance, listGasStationsByPrice } from "../services/gasStation";
import LocationContext from "./LocationContext";

interface GasStationContextProps {
    
    gasStations: GasStation[]
    gasStationsToShow: GasStation[]
    
    search: string
    setSearch: (value: string) => void
    
    filter: 'distance' | 'price' | 'favorite' | ''
    setFilter: (new_value: 'distance' | 'price' | 'favorite' | '') => void
    
    isSearching: boolean
}

const GasStationContext = createContext<GasStationContextProps>({} as GasStationContextProps);

export function GasStationProvider(props: { children: any}) {

    const { userLocation } = useContext(LocationContext);

    const [ gasStations, setGasStations ] = useState<GasStation[]>([]);
    const [ gasStationsToShow, setGasStationsToShow ] = useState<GasStation[]>([]);

    const [ search, setSearch ] = useState<string>('');
    const [ filter, setFilter ] = useState<'distance' | 'price' | 'favorite' | ''>('');
    const [ isSearching, setIsSearching ] = useState(false);


    async function getGasStations() {

        try {
            let all = await listGasStations();
            
            let converted = all.map((gasStation: any) => { 
                return GasStation.toGasStation(gasStation)
            });

            setGasStations(converted);
            setGasStationsToShow([]);

        } catch(e) {
            // alertError('Ocorreu um erro');
        } 

    }

    async function getByDistance() {

        try {
            let all = await listGasStationsByDistance(gasStations.length, userLocation.longitude, userLocation.latitude );
            
            let converted = all.map((gasStation: any) => { 
                return GasStation.toGasStation(gasStation)
            });

            setGasStations(converted);
            setGasStationsToShow([]);

        } catch(e) {
            // alertError('Ocorreu um erro');
        } 

    }

    async function getByPrive() {

        try {
            let all = await listGasStationsByPrice(gasStations.length);
            
            let converted = all.map((gasStation: any) => { 
                return GasStation.toGasStation(gasStation)
            });

            setGasStations(converted);
            setGasStationsToShow([]);

        } catch(e) {
            // alertError('Ocorreu um erro');
        } 

    }

    useEffect( () => {

        async function generateSearch() {
            setIsSearching(true);
            
            if(filter == 'distance') await getByDistance()
            else if (filter == 'price') await getByPrive();
            else if (filter == 'favorite') {
                await getGasStations();
            }

            let temp = gasStations.filter((gasStation) => {
                
                let okInSearch = gasStation.name.toLowerCase().includes(search.toLowerCase()) || gasStation.address.name.toLowerCase().includes(search.toLowerCase());
                
                if(filter == 'favorite') return okInSearch && gasStation.isFavorite;
                else return okInSearch;
            })

            // if( search == '') setGasStationsToShow([]);
            // else setGasStationsToShow(temp);

            setGasStationsToShow(temp);

            setIsSearching(false);
        }
        
        generateSearch();

    }, [ search, filter ])

    useEffect(() => {
        getGasStations();
    }, [])

    return (
        <GasStationContext.Provider value={{
            gasStations,
            gasStationsToShow,

            search,
            setSearch,

            filter,
            setFilter,
            
            isSearching
        }}>
            {props.children}
        </GasStationContext.Provider>
    )
}

export default GasStationContext;