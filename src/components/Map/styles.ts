import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({
    
    container: {
        width: '100%',
        height: '100%',
    },
    
    map: {
        flex: 1,
        marginBottom: -60,
    },
    
    callout: {

        width: 150,
        height: "100%",

        backgroundColor: COLORS.white,
        
        borderRadius: 10,
        padding: 10,

        ...SHADOW
      },

      calloutText: {
        color: COLORS.blue,
        fontFamily: FONTS.regular,
        fontSize: 10
      }

});

export default styles;