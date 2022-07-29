import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    container: {

        height: 75,
        flex: 1,
        
    },
    
    label: {
        fontFamily: FONTS.regular,
        color: COLORS.blue,

        height: 20,

        fontSize: 15,
        marginBottom: 5
    },

    inputContainer: {
        flex: 1,

        flexDirection: 'row',

        borderRadius: 2,
        borderWidth: 1,
        borderColor: COLORS.gray_transparent,
    },

    input: {

        flex: 1,

        fontFamily: FONTS.bold,
        color: COLORS.blue,

        paddingHorizontal: 10,

        fontSize: 15,
    },

    arrows: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    touchable: {
        width: 30,
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
    },

    arrow: {
        fontSize: 8,
        color: COLORS.blue,

        transform: [{ rotate: '90deg'}]
    },

    arrowRotated: {
        transform: [{ rotate: '270deg'}]
    }

})

export default styles;