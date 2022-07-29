import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
    },

    content: {
        backgroundColor: COLORS.white,
        
        padding: 10,

        alignSelf: 'flex-end',
        
        borderRadius: 3,
        
        alignItems: 'center',
        flexDirection: 'row',

        ...SHADOW
    },

    text: {

        color: COLORS.blue,
        fontFamily: FONTS.bold,
        fontSize: 14,
    },

    icon: {
        color: COLORS.red,
        fontSize: 13,

        marginRight: 7
    }
})

export default styles;