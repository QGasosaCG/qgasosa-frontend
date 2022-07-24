import {Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Icons from "../../assets/icons";
import { COLORS } from "../../utils/theme";

interface RefuelProps {
    onPress: () => void
}

export default function Refuel(props: RefuelProps) {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button} activeOpacity={0.8} >
            <View style={styles.content}>
                <Icons name="fire" style={styles.content.svg} />
                <Text style={styles.text}>Abastecer</Text>
            </View>
        </TouchableOpacity>
    )
}
