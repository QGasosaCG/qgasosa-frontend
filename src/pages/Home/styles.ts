import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme";

const styles = StyleSheet.create({
    
    container: {
      overflow: 'hidden'
    },

    main: {
      alignItems: 'center',
      justifyContent: 'space-between',
      
      padding: 30,

      height: '100%',
      width: '100%'
    },

    flexRow: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
    
});

export default styles;