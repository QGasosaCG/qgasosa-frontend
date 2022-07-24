import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
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

    marker: {
      backgroundColor: COLORS.red,
      
      height: 20,
      paddingHorizontal: 5,

      borderRadius: 3,

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',

      svg: {
        color: COLORS.white,
        fontSize: 10,
      },

      star: {
        color: COLORS.white,
        fontSize: 7,

        marginLeft: 5,
      }
    }

});

export default styles;