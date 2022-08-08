import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    background: {
        backgroundColor: COLORS.blue_transparent,
        
        width: '100%',
        height: '100%',

        position: 'absolute'
    },

    content: {
        height: 400
    },

    title: {
        color: COLORS.blue,

        fontFamily: FONTS.bold,
        fontSize: 23,

        marginBottom: 20
    },

})

export default styles;