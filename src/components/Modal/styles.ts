import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme";

const styles = StyleSheet.create({

    background: {
        
        flexdirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: '100%',
        width: '100%',

    },

    close: {
        backgroundColor: COLORS.white,
        width: 50,
        height: 45,
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,

        svg: {
            fontSize: 10,
            color: COLORS.blue
        }
    },

    content: {
        paddingVertical: 35,
        paddingHorizontal: 30,
        width: '100%',
        backgroundColor: COLORS.white
    }

})

export default styles;