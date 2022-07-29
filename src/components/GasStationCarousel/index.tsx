import { useContext, useRef, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import Icons from "../../assets/icons";
import GasStationContext from "../../contexts/GasStationContext";
import GasStation from "../../models/GasStation";
import { priceView } from '../../utils/functions';
import { COLORS } from "../../utils/theme";

import styles from './styles'

interface CarouselProps {
    text: string,
    gasStations: GasStation[]
}

export default function Carousel(props: CarouselProps) {

    const { isFavorite, setOpenGasStation } = useContext(GasStationContext);

    const scroll = useRef<ScrollView>();

    const [ numberScroll, setNumberScroll ] = useState(0);

    function scrollRight() {
        scroll.current?.scrollTo({
            x: numberScroll + 200
        })
    }

    function scrollLeft() {
        scroll.current?.scrollTo({
            x: numberScroll - 200
        })
    }

    return (
        <View>
            
            <View style={styles.top}>

                <Text style={styles.text}>{props.text}</Text>
                
                <View style={styles.arrows}>
                    <TouchableOpacity style={styles.touchable} onPress={scrollLeft} activeOpacity={0.8}>
                        <Icons name='arrow' style={{ ...styles.arrow }}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchable} onPress={scrollRight} activeOpacity={0.8}>
                        <Icons name='arrow' style={{ ...styles.arrow, ...styles.arrowRotated }}/>
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView horizontal ref={scroll} onScroll={(scroll) => setNumberScroll(scroll.nativeEvent.contentOffset.x)}>

                {
                    props.gasStations.map((gasStation, index) => {

                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setOpenGasStation(gasStation)} key={'gasStation-' + props.text + '-' + index}>

                                <View style={{...styles.gasStation, marginLeft: index == 0 ? 0 : 10}}>

                                    <View style={styles.gasStation_name} >
                                        { isFavorite(gasStation) ? 
                                            <Icons name='star' style={styles.favoriteIcon}/>
                                        : null}

                                        <Text style={styles.gasStation_title} ellipsizeMode='tail' numberOfLines={1}>{gasStation.name}</Text>
                                    </View>

                                    <View style={styles.gasStation_fuels}>
                                        {
                                            gasStation.fuels.map((fuel, index) => {
                                                return (
                                                    <Text style={styles.gasStation_fuel} key={'fuel-' + props.text + '-' + index }>{fuel.name} R$ {priceView(fuel.price)}</Text>
                                                )
                                            })
                                        }
                                    </View>

                                    <View style={styles.gasStation_address} >
                                        <Icons name='location' style={styles.locationIcon}/>
                                        <Text style={styles.gasStation_address_text} ellipsizeMode='tail' numberOfLines={1}>{gasStation.address.name}</Text>
                                    </View>

                                    <TouchableOpacity activeOpacity={0.8}>
                                        <View style={styles.gasStation_button}>
                                            <Text style={styles.gasStation_button_text}>Ir até este posto!</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>

        </View>
    )

}