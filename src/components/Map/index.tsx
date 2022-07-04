import { useContext } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import LocationContext from '../../contexts/LocationContext';
import { COLORS } from '../../utils/theme';
import mapStyle from '../../utils/mapsStyle';

import styles from './styles';

interface MapsProps {
    children?: any
    style?: any
}

export default function Home(props: MapsProps) {

    const { userLocation, locationDelta } = useContext(LocationContext);

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
            />        
        </View>
    )
}

  