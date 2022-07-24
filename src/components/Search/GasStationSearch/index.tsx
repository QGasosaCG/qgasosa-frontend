import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

import GasStation from "../../../models/GasStation"
import Icons from '../../../assets/icons';

import styles from "./styles";
import { priceView } from "../../../utils/functions";
import { useContext } from "react";
import GasStationContext from "../../../contexts/GasStationContext";

interface GasStationSearchProps {
    gasStation: GasStation,
    onPress: () => void
}

export default function GasStationSearch(props: GasStationSearchProps) {

    const { isFavorite } = useContext(GasStationContext)

    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.container}>
                <View style={styles.content}>

                    { isFavorite(props.gasStation) ? 
                        <Icons name='star' style={styles.favoriteIcon}/>
                    : null}

                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail' >{props.gasStation.name}</Text>
                    <Text style={styles.distance}>100m</Text>

                </View>

                <View style={{...styles.content, flexDirection: 'column', alignItems: 'flex-start'}}>

                    {
                        props.gasStation.fuels.map((fuel, index) => {
                            return(
                                <Text style={styles.fuel} key={'fuel-' + index}>{fuel.name} - <Text style={styles.money}>R$ {priceView(fuel.price)}</Text></Text>
                            )
                        })
                    }

                </View>

                <View style={styles.content}>
                    <Icons name='location' style={styles.locationIcon}/>
                    <Text style={styles.address} numberOfLines={1} ellipsizeMode='tail' >{props.gasStation.address.name}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}