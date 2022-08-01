import { createContext, useContext, useEffect, useState } from "react";

import GasStation from "../models/GasStation";
import { listGasStations, listGasStationsByDistance, listGasStationsByPrice } from "../services/gasStation";
import LocationContext from "./LocationContext";
import AppContext from "./AppContext";

interface GasStationContextProps {
    
    gasStations: GasStation[]
    gasStationsToShow: GasStation[]

    cleanGasStationsToShow: () => void
    
    search: string
    setSearch: (value: string) => void
    
    filter: 'distance' | 'price' | 'favorite' | ''
    setFilter: (new_value: 'distance' | 'price' | 'favorite' | '') => void
    
    isSearching: boolean

    openGasStation: GasStation | null
    setOpenGasStation: (toOpen: GasStation | null) => void,

    favorite: (gasStation: GasStation) => void
    unfavorite: (gasStation: GasStation) => void
    isFavorite: (gasStation: GasStation) => boolean

}

const GasStationContext = createContext<GasStationContextProps>({} as GasStationContextProps);

export function GasStationProvider(props: { children: any}) {

    const { storage, updateStorage } = useContext(AppContext);
    const { userLocation } = useContext(LocationContext);

    const [ gasStations, setGasStations ] = useState<GasStation[]>([]);
    const [ gasStationsToShow, setGasStationsToShow ] = useState<GasStation[]>([]);

    const [ search, setSearch ] = useState<string>('');
    const [ filter, setFilter ] = useState<'distance' | 'price' | 'favorite' | ''>('');
    const [ isSearching, setIsSearching ] = useState(false);

    const [ openGasStation, setOpenGasStation ] = useState<GasStation | null>( null );

    const [ favoritesGasStations, setFavoritesGasStations ] = useState<string[]>([]);

    async function getGasStations() {

        try {
            let all = await listGasStations();

            let converted = all.map((gasStation: any) => { 
                return GasStation.toGasStation(gasStation);
            });

            setGasStations(converted);
            setGasStationsToShow([]);

        } catch(e) {
            // alertError('Ocorreu um erro');
        } 

    }

    async function getByDistance() {

        try {

            let temp = [...gasStations];
            let distances = await listGasStationsByDistance( userLocation.longitude, userLocation.latitude );            

            distances.forEach(object => {
                temp.forEach( gasStation => {
                    if(object.name == gasStation.name) gasStation.distance = object.distance
                })
            });
            
            temp.sort((a, b) => {
                if(a.distance.value > b.distance.value) return 1
                return -1;
            })

            setGasStations(temp);

        } catch(e) {
            // alertError('Ocorreu um erro');
        } 

    }

    async function getByPrice() {

        try {
            
            let temp = [...gasStations];
            
            temp.sort((a, b) => {

                let A_priceGasoline = 0;
                let B_priceGasoline = 0;
                
                for (let fuel of a.fuels) {
                    if(fuel.name == 'GASOLINA COMUM') {
                        A_priceGasoline = fuel.price;
                        break;    
                    }
                }

                for (let fuel of b.fuels) {
                    if(fuel.name == 'GASOLINA COMUM') {
                        B_priceGasoline = fuel.price;
                        break;    
                    }
                }

                if(A_priceGasoline == 0 || B_priceGasoline == 0) return -5;

                if(A_priceGasoline > B_priceGasoline) return 1
                return -1;
            })

            setGasStations(temp);

        } catch(e) {
            // alertError('Ocorreu um erro');
        } 

    }

    function cleanGasStationsToShow() {
        setGasStationsToShow([]);
    }

    async function favorite(gasStation: GasStation) {
        try {
        
            let temp = [...favoritesGasStations, gasStation.name]

            updateStorage({
                ...storage,
                favoritesGasStations: temp
            })

            setFavoritesGasStations(temp)
            
        } catch(e) {
            console.log(e)
        }
    }

    async function unfavorite(gasStation: GasStation) {
        try {

            let temp = favoritesGasStations;

            temp.forEach((name, index) => {
                if(name === gasStation.name) temp.splice(index, 1)
            }) 

            updateStorage({
                ...storage,
                favoritesGasStations: temp
            })

            setFavoritesGasStations(temp);

        } catch(e) {
            console.log(e)
        }
    }

    function isFavorite(gasStation: GasStation) {
        return favoritesGasStations?.includes(gasStation.name);
    }

    useEffect(() => {

        async function execute() {

            setIsSearching(true);

            await getGasStations();

            if(filter == 'distance') await getByDistance();
            else if (filter == 'price') await getByPrice();
    
            let temp = gasStations.filter((gasStation) => { 
                let okInSearch = gasStation.name.toLowerCase().includes(search.toLowerCase()) || gasStation.address.street.toLowerCase().includes(search.toLowerCase());
                
                if(filter == 'favorite') return okInSearch && isFavorite(gasStation);
                else return okInSearch;
            })
    
            setGasStationsToShow(temp);
            setIsSearching(false);
        }

        execute();
    }, [ search, filter ])

    useEffect(() => {
        setFavoritesGasStations(storage.favoritesGasStations)
    }, [storage])

    useEffect(() => {
        getGasStations();
        setSearch('');
        setFilter('');
    }, [])

    return (
        <GasStationContext.Provider value={{
            gasStations,
            gasStationsToShow,

            cleanGasStationsToShow,

            search,
            setSearch,

            filter,
            setFilter,
            
            isSearching,

            openGasStation,
            setOpenGasStation,

            favorite,
            unfavorite,
            isFavorite
        }}>
            {props.children}
        </GasStationContext.Provider>
    )
}

export default GasStationContext;