import { StyleSheet } from "react-native";
import { COLORS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    button: {
        height: 50,
        width: 50,

        borderRadius: 5,

        backgroundColor: COLORS.white,

        alignItems: 'center',
        justifyContent: 'center',

        svg: {
            fontSize: 18,
            color: COLORS.red
        },  

        ...SHADOW
    }
})

export default styles;