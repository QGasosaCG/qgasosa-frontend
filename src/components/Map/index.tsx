import { useContext } from 'react';
import { Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import LocationContext from '../../contexts/LocationContext';
import { COLORS } from '../../utils/theme';
import mapStyle from '../../utils/mapsStyle';

import styles from './styles';
import GasStationContext from '../../contexts/GasStationContext';
import { GasStationIcon } from '../../assets/icons';

interface MapsProps {
    children?: any
    style?: any
}

export default function Home(props: MapsProps) {

    const { userLocation, locationDelta } = useContext(LocationContext);
    const { gasStations } = useContext(GasStationContext);

    return (
        <View style={{...props.style, ...styles.container}}>            
            <MapView 
                style={ styles.map }
                region={{
                    ...userLocation,
                    ...locationDelta
                }}
                showsUserLocation
                followsUserLocation
                showsBuildings={false}
                showsIndoors={false}
                showsMyLocationButton={false}
                loadingBackgroundColor={COLORS.white}
                minZoomLevel={12}
                customMapStyle={mapStyle}
                userLocationFastestInterval={0}
                userLocationUpdateInterval={0}
            >
                
                {
                    gasStations.map((gasStation, index) => {
                        return (
                            <Marker key={'gasStation-' + index} coordinate={{...gasStation.address}} flat onPress={() => console.log('abrir')}>
                                <GasStationIcon />
                            </Marker>
                        )
                    })
                }

            </MapView>        
        </View>
    )
}

  