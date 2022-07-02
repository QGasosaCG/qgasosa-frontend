import { createContext, useEffect, useState } from "react";
import * as Location from 'expo-location'

interface Location {
    latitude: number,
    longitude: number
}

interface LocationDelta {
    latitudeDelta: number,
    longitudeDelta: number
}


const defaultLocation = {
    latitude: -7.217163175384563,
    longitude: -35.910658000674744
}

const defaultLocationDelta = {
    latitudeDelta: 0.008,
    longitudeDelta: 0.003
}

interface LocationContextProps {
    userLocation: Location,
    locationDelta: LocationDelta
}

const LocationContext = createContext<LocationContextProps>({} as LocationContextProps);

export function LocationProvider(props: { children: any}) {

    const [ userLocation, setUserLocation] = useState<Location>(defaultLocation);

    async function getLocation() {

        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setUserLocation(defaultLocation)
        } else {
            let location = await Location.getCurrentPositionAsync({});
            setUserLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
        }

    }

    useEffect(() => {
        getLocation();
    }, [])

    return (
        <LocationContext.Provider value={{
            userLocation,
            locationDelta: defaultLocationDelta
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}

export default LocationContext;