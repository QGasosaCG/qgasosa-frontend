import { useContext, useEffect } from "react"
import { ScrollView, Text, View } from 'react-native';
import GasStationContext from "../../contexts/GasStationContext";

import RefuelContext from "../../contexts/RefuelContext";
import Carousel from "./GasStationCarousel";
import Modal from "../Modal";

import styles from './styles'

export default function ModalRefuel() {

    const { isModalOpen, closeModal } = useContext(RefuelContext);
    const { gasStations } = useContext(GasStationContext);

    if(!isModalOpen) return null

    return (
        <View style={styles.background} >
                        
            <Modal close={closeModal} visible={isModalOpen}>

                <ScrollView style={styles.content}>
                    <Text style={styles.title}>Para onde nós vamos?</Text>

                    <Carousel text='Postos mais próximos' gasStations={ [gasStations[0], gasStations[1], gasStations[2]] } />
                    <Carousel text='Postos mais baratos' gasStations={ [gasStations[0], gasStations[1], gasStations[2]] } />
                    <Carousel text='Postos com maior custo-benefício' gasStations={ [gasStations[0], gasStations[1], gasStations[2]] } />
                </ScrollView>

            </Modal>

        </View>
    )
}