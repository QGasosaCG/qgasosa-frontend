import { useContext } from "react";
import { View, Text } from "react-native";
import Icons from "../../assets/icons";

import ConsumptionContext from "../../contexts/ConsumptionContext";

import styles from './styles'

export default function Consumption() {
    
    const { consumption } = useContext(ConsumptionContext);
    
    if (consumption > 0) return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Icons name="steering_wheel" style={styles.icon}/>
                <Text style={styles.text}>{consumption.toFixed(1)} Km/L</Text>
            </View>
        </View>
    )

    return null
}