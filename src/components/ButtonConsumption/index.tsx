import { TouchableHighlight } from "react-native";
import { GasolineIcon } from "../../assets/icons/icons";

import { COLORS } from "../../utils/theme";
import styles from "./styles";

interface ButtonConsumptionProps {
    onPress: () => void
}

export default function ButtonConsumption(props: ButtonConsumptionProps) {

    return (
        <TouchableHighlight onPress={props.onPress} style={styles.button} >
            <GasolineIcon color={COLORS.red} />
        </TouchableHighlight>
    )
}
