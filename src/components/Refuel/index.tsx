import {Text, TouchableHighlight, View } from "react-native";

import styles from "./styles";
import { FireIcon } from "../../assets/icons";
import { COLORS } from "../../utils/theme";

interface RefuelProps {
    onPress: () => void
}

export default function Refuel(props: RefuelProps) {

    return (
        <TouchableHighlight onPress={props.onPress} style={styles.button} underlayColor={COLORS.red} >
            <View style={styles.content}>
                <FireIcon color={COLORS.white} />
                <Text style={styles.text}>Abastecer</Text>
            </View>
        </TouchableHighlight>
    )
}
