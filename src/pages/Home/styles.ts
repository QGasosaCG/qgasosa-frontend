import { BackHandler, StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme";

const styles = StyleSheet.create({
    
    container: {
      overflow: 'hidden',

      flex: 1,
      position: 'relative'
    },

    search: {
      
      marginHorizontal: 30,
      marginTop: 30,

    },

    flexRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',

      position: 'absolute',
      
      bottom: 0,

      marginHorizontal: 30,
      marginBottom: 30,
    },

    map: {
      position: 'absolute',
      bottom: 0
    }
    
});

export default styles;