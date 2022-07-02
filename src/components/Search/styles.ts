import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

    container: {
        width: '100%',
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
    }

})

export default styles;