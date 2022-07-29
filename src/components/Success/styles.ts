import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../utils/theme";

const styles = StyleSheet.create({

    background: {
        
        justifyContent: 'center',
        alignItems: 'center',

        height: '100%',
        width: '100%',

        backgroundColor: COLORS.blue_transparent,
    },

    content: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,

        width: '100%',
        maxWidth: 275,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 5
    },

    icon: {
        fontSize: 22,
        color: COLORS.red,

        marginBottom: 15,
    },

    title: {
        fontSize: 22,
        color: COLORS.blue,
        fontFamily: FONTS.bold,

        marginBottom: 15,

        textAlign: 'center'
    },

    text: {
        fontSize: 16,
        lineHeight: 18,

        color: COLORS.gray,
        fontFamily: FONTS.regular,

        textAlign: 'center'
    }

})

export default styles;