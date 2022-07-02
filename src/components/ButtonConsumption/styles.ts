import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    button: {
        height: 50,
        width: 50,

        borderRadius: 5,

        backgroundColor: COLORS.white,

        alignItems: 'center',
        justifyContent: 'center',

        ...SHADOW
    }
})

export default styles;