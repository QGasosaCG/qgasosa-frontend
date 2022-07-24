import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import GasStation from "../models/GasStation";
import { listGasStations, listGasStationsByDistance, listGasStationsByPrice } from "../services/gasStation";
import LocationContext from "./LocationContext";
import AppContext from "./AppContext";

interface GasStationContextProps {
    
    gasStations: GasStation[]
    gasStationsToShow: GasStation[]
    
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

    async function getByPrice() {

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

    async function favorite(gasStation: GasStation) {
        try {
        
            let temp = [...favoritesGasStations, gasStation.id]

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

            temp.forEach((id, index) => {
                if(id === gasStation.id) temp.splice(index, 1)
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
        return favoritesGasStations.includes(gasStation.id);
    }

    useEffect( () => {
        
        setIsSearching(true);
        
        if(filter == 'distance') getByDistance()
        else if (filter == 'price') getByPrice();
        else if (filter == 'favorite') {
            getGasStations();
        }

        let temp = gasStations.filter((gasStation) => {
            
            let okInSearch = gasStation.name.toLowerCase().includes(search.toLowerCase()) || gasStation.address.name.toLowerCase().includes(search.toLowerCase());
            
            if(filter == 'favorite') return okInSearch && isFavorite(gasStation);
            else return okInSearch;
        })


        setGasStationsToShow(temp);
        setIsSearching(false);

    }, [ search, filter ])


    useEffect(() => {
        setFavoritesGasStations(storage.favoritesGasStations)
    }, [storage])

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