import { TouchableOpacity } from "react-native";
import Icons from "../../assets/icons";

import styles from "./styles";

interface ButtonConsumptionProps {
    onPress: () => void
}

export default function ButtonConsumption(props: ButtonConsumptionProps) {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button} activeOpacity={0.8} >
            <Icons name="gas" style={styles.button.svg}/>
        </TouchableOpacity>
    )
}
