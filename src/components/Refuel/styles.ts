import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    button: {
        height: 50,
        flex: 1,

        borderRadius: 5,

        backgroundColor: COLORS.red,

        alignItems: 'center',
        justifyContent: 'center',

        marginRight: 10,

        ...SHADOW
    },

    content: {
        flexDirection: 'row',
        alignItems: "center",

        svg: {
            color: COLORS.white,
            fontSize: 15
        },
    },

    text: {
        fontFamily: FONTS.bold,
        fontSize: 18,
        color: COLORS.white,
        marginLeft: 10
    }

})

export default styles;