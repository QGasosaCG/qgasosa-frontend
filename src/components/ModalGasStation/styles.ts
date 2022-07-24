import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    background: {
        backgroundColor: COLORS.blue_transparent,
        
        width: '100%',
        height: '100%',

        position: 'absolute'
    },

    favoriteIcon: {
        fontSize: 18,
    },

    name: {
        fontSize: 32,
        fontFamily: FONTS.bold,
        lineHeight: 34,
        color: COLORS.red,
        
        marginTop: 20,
    },

    address: {
        
        flexDirection: 'row',
        alignItems: 'center',

        marginTop: 10,

        svg: {
            marginRight: 10,
            fontSize: 14,
            color: COLORS.blue,
        },

        text: {
            fontSize: 15,
            fontFamily: FONTS.light,
            color: COLORS.blue,
        }
        
    },

    fuels: {
        marginVertical: 40,
        width: '100%',
    },
    
    fuel: {

        flexDirection: 'row',
        alignItems: 'center',

        text: {
            fontFamily: FONTS.regular,
            fontSize: 17,
            color: COLORS.blue,
        },
        
    },
    
    dottedLine: {
        flex: 1,
        height: 10,

        marginHorizontal: 7,
        
        borderStyle: 'dotted',
        borderBottomWidth: 1,
    },

    button: {

        width: '100%',
        height: 50,

        borderRadius: 3,

        alignItems: 'center',
        justifyContent: 'center'

    },

    buttonGoToHim: {

        backgroundColor: COLORS.red,

        marginBottom: 10,

        text: {
            color: COLORS.white,

            fontFamily: FONTS.bold,
            fontSize: 17
        }
    },

    buttonInvoice: {

        backgroundColor: COLORS.gray_transparent,

        text: {
            color: COLORS.red,

            fontFamily: FONTS.bold,
            fontSize: 14
        }
    }

})

export default styles;