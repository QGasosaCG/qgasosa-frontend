import { TouchableHighlight, View, Text } from "react-native"

import GasStation from "../../../models/GasStation"
import { LocationIcon, StarFillIcon } from '../../../assets/icons';

import styles from "./styles";

interface GasStationSearchProps {
    gasStation: GasStation,
    onClick: () => void
}

export default function GasStationSearch(props: GasStationSearchProps) {

    

    return (
        <TouchableHighlight>
            <View style={styles.container}>
                <View style={styles.content}>

                    { props.gasStation.isFavorite ? 
                        <StarFillIcon style={styles.favoriteIcon} />
                    : null}

                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail' >{props.gasStation.name}</Text>
                    <Text style={styles.distance}>100m</Text>

                </View>

                <View style={{...styles.content, flexDirection: 'column', alignItems: 'flex-start'}}>

                    {
                        props.gasStation.fuels.map((fuel, index) => {
                            return(
                                <Text style={styles.fuel} key={'fuel-' + index}>{fuel.name} - <Text style={styles.money}>R$ {fuel.price.toFixed(2).replace('.', ',')}</Text></Text>
                            )
                        })
                    }

                </View>

                <View style={styles.content}>
                    
                    <LocationIcon style={styles.locationIcon}/>
                    <Text style={styles.address} numberOfLines={1} ellipsizeMode='tail' >{props.gasStation.address.name}</Text>

                </View>

            </View>
        </TouchableHighlight>
    )
}