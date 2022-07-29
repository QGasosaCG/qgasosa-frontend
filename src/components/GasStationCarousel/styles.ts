import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    top: {
        display: 'flex',
        flexDirection: 'row',
        
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    text: {
        color: COLORS.blue,
        fontFamily: FONTS.regular,
        fontSize: 15,

        lineHeight: 20,
    },

    arrows: {
        display: 'flex',
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'space-around',
    },

    touchable: {
        alignItems: 'center',
        justifyContent: 'center',

        height: 40,
        width: 30,
    },

    arrow: {
        fontSize: 8,
        color: COLORS.blue,
    },

    arrowRotated: {
        transform: [{ rotate: '180deg'}]
    },

    gasStation: {
        borderWidth: 0.5,
        borderColor: COLORS.gray_transparent,
        borderRadius: 5,

        width: 220,

        padding: 15
    },

    favoriteIcon: {
        fontSize: 12,
        color: COLORS.red,
        marginRight: 5
    },

    gasStation_name: {
        display: 'flex',
        flexDirection: 'row',

        alignItems: 'center'
    },
    
    gasStation_title: {
        color: COLORS.red,
        fontFamily: FONTS.bold,
        fontSize: 18
    },

    gasStation_fuels: {
        marginVertical: 10
    },

    gasStation_fuel: {
        fontSize: 10,
        fontFamily: FONTS.regular,

        color: COLORS.blue
    },

    gasStation_address: {
        flexDirection: 'row',
        alignItems: 'center',

        marginBottom: 10
    },

    locationIcon: {
        fontSize: 9,
        color: COLORS.blue
    },

    gasStation_address_text: {
        color: COLORS.blue,
        fontFamily: FONTS.regular,
        fontSize: 9,
        width: 130,
        marginLeft: 5
    },
    
    gasStation_button: {
        backgroundColor: COLORS.red,
        alignSelf: 'flex-start',

        borderRadius: 2,
        paddingHorizontal: 7,
        paddingVertical: 4
    },

    gasStation_button_text: {
        color: COLORS.white,

        fontFamily: FONTS.bold,
        fontSize: 12
    }
    

})

export default styles;