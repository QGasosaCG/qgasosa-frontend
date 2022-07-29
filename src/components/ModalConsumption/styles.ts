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
        fontSize: 28,
        lineHeight: 35
    },

    text: {

        color: COLORS.gray,
        fontFamily: FONTS.regular,
        fontSize: 17,

        lineHeight: 20,

        marginVertical: 25,
    },

    emphasis: {
        fontFamily: FONTS.bold
    },


    button: {

        width: '100%',
        height: 50,

        backgroundColor: COLORS.gray_transparent,

        borderRadius: 3,

        alignItems: 'center',
        justifyContent: 'center',

        text: {
            color: COLORS.white,

            fontFamily: FONTS.bold,
            fontSize: 17
        }

    },

    sideBySide: {
        flexDirection: 'row'
    }

})

export default styles;