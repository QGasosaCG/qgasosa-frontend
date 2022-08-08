import { useContext } from "react"
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icons from "../../assets/icons";

import GasStationContext from "../../contexts/GasStationContext"
import InvoiceContext from "../../contexts/InvoiceContext";
import { priceView } from "../../utils/functions";
import { COLORS } from "../../utils/theme";
import Modal from "../Modal";

import styles from './styles'

export default function ModalGasStation() {

    const { openGasStation, setOpenGasStation, isFavorite, favorite, unfavorite } = useContext(GasStationContext);
    const { openCamera } = useContext(InvoiceContext);

    if(!openGasStation) return null

    return (
        <View style={styles.background} >
                        
            <Modal close={() => setOpenGasStation(null)} visible={!!openGasStation}>

                <ScrollView style={styles.content}>
                        
                    { isFavorite(openGasStation) ?
                        <TouchableOpacity style={styles.touchable} activeOpacity={0.8} onPress={() => unfavorite(openGasStation)}><Icons name='star' style={{...styles.favoriteIcon, color: COLORS.red}} /></TouchableOpacity>
                    :
                        <TouchableOpacity style={styles.touchable} activeOpacity={0.8} onPress={() => favorite(openGasStation)}><Icons name='star' style={{...styles.favoriteIcon, color: COLORS.gray_transparent}} /></TouchableOpacity>
                    }

                    <Text style={styles.name}>{openGasStation.name}</Text>

                    <View style={styles.address}>
                        
                        <Icons name='location' style={styles.address.svg}/>
                        <Text style={styles.address.text}>{openGasStation.address.street}</Text>

                    </View>

                    <View style={styles.fuels}>

                        {
                            openGasStation.fuels.map((fuel, index) => {
                                return (
                                    <View style={styles.fuel} key={'fuel' + index}>
                                        <Text style={styles.fuel.text}>{fuel.name}</Text>
                                        <View style={styles.dottedLine}/>
                                        <Text style={styles.fuel.text}>R$ {priceView(fuel.price)}</Text>
                                    </View>
                                )
                            })
                        }

                    </View>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => Linking.openURL(`google.navigation:q=${openGasStation.address.latitude}+${openGasStation.address.longitude}`)}>
                        <View style={{...styles.button, ...styles.buttonGoToHim}}>
                            <Text style={styles.buttonGoToHim.text}>Ir até este posto!</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => { setOpenGasStation(null); openCamera();}}>
                        <View style={{...styles.button, ...styles.buttonInvoice}}>
                            <Text style={styles.buttonInvoice.text}>Preços diferentes? Envie uma foto da nota fiscal</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>

            </Modal>

        </View>
    )
}