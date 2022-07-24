import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    container: {
        
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        borderRadius: 5,

        maxHeight: 400,

        ...SHADOW
    },

    search: {
        height: 50,
        
        borderRadius: 5,
        
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

        backgroundColor: COLORS.white,
        
        ...SHADOW
    },
    
    input: {
        flex: 1,
        marginHorizontal: 10,
        fontFamily: FONTS.regular,
        color: COLORS.red
    },

    icon: {
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },

    filters: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    filtersTitle: {
        color: COLORS.red,
        fontSize: 12,
        fontFamily: FONTS.regular
    },

    empty: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        
        color: COLORS.gray,
        fontFamily: FONTS.light
    }

})

export default styles;