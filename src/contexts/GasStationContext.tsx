import { createContext, useContext, useEffect, useState } from "react";

import GasStation from "../models/GasStation";
import { listGasStations, listGasStationsByDistance } from "../services/gasStation";
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
            setGasStationsToShow(converted);

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

            return temp;

        } catch(e) {
            // alertError('Ocorreu um erro');
        } 

    }

    async function getByPrice() {
        
        let temp:GasStation[] = []

        gasStations.forEach(gasStation => {

            let haveTheFuel = false;
            
            for (let fuel of gasStation.fuels) {
                if(fuel.name == 'GASOLINA COMUM') {
                    haveTheFuel = true
                    break;
                }
            }

            if(haveTheFuel) temp.push(gasStation)
        })

        let final = temp.sort((a, b) => {
            
            let price_A = 0;
            let price_B = 0;
            
            a.fuels.forEach(fuel => {
                if(fuel.name == 'GASOLINA COMUM') price_A == fuel.price
            })

            b.fuels.forEach(fuel => {
                if(fuel.name == 'GASOLINA COMUM') price_B == fuel.price
            })


            if(price_A > price_B) return -1
            else return 1
        })

        return final;
    }

    function getFavorites() {
        return gasStations.filter(gasStation => isFavorite(gasStation));
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

            let temp : GasStation[]  = [];

            if(filter == 'distance') temp = await getByDistance() || [];
            else if (filter == 'price') temp = await getByPrice() || [];
            else if (filter == 'favorite') temp = getFavorites() || [];
    
            let final = temp.filter(gasStation => gasStation.name.toLowerCase().includes(search.toLowerCase()) || gasStation.address.street.toLowerCase().includes(search.toLowerCase())) || [];
    
            setGasStationsToShow(final);

            setIsSearching(false);
        }

        execute();
    }, [ search, filter ])

    useEffect(() => {
        setFavoritesGasStations(storage.favoritesGasStations)
    }, [storage])

    useEffect(() => {
        ( async () => {
            cleanGasStationsToShow();
            await getGasStations();
            setSearch('');
            setFilter('');
        })()
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
            isFavorite,
        }}>
            {props.children}
        </GasStationContext.Provider>
    )
}

export default GasStationContext;