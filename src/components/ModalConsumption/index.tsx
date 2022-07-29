import { useContext, useEffect, useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import ConsumptionContext from "../../contexts/ConsumptionContext";
import { COLORS } from "../../utils/theme";
import Modal from "../Modal";
import NumberInput from "../NumberInput";

import styles from './styles'

export default function ModalConsumption() {

    const { isModalOpen, closeModal, consumptionCalculated, litersFilled, setLitersFilled, kilometersDriven, setKilometersDriven, saveConsumption } = useContext(ConsumptionContext);

    const [ buttonDisabled, setButtonDisabled ] = useState(true);

    useEffect(() => {
        setButtonDisabled(litersFilled == 0 || kilometersDriven == 0);
    }, [litersFilled, kilometersDriven])

    if(!isModalOpen) return null

    return (
        <View style={styles.background} >
                        
            <Modal close={closeModal} visible={isModalOpen}>

                <ScrollView style={styles.content}>
                    <Text style={styles.title}>Registrar consumo de combustível</Text>

                    <Text style={styles.text}>Registrar o consumo do seu veículo vai fazer com que possamos oferecer um custo-benefício personalizado para seu veículo!</Text>

                    <View style={styles.sideBySide}>
                        <NumberInput value={litersFilled} setValue={setLitersFilled}  label='Litros Abastecidos:' toFixed controls style={{ marginRight: 10 }}/>
                        <NumberInput value={kilometersDriven} setValue={setKilometersDriven}  label='Quilometros Rodados:' toFixed controls />
                    </View>                

                    <Text style={styles.text}>Consumo Realizado: <Text style={styles.emphasis}>{consumptionCalculated.toFixed(1)} Km/L</Text></Text>

                    <TouchableOpacity activeOpacity={0.8} onPress={saveConsumption} disabled={buttonDisabled}>
                        <View style={{...styles.button, backgroundColor: buttonDisabled ? COLORS.gray_transparent : COLORS.red}}>
                            <Text style={styles.button.text}>Registrar consumo!</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </Modal>

        </View>
    )
}