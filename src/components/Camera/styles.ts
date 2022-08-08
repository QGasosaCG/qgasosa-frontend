import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme";

const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
    },

    camera: {
        height: '70%',
        width: '100%',
    },

    options: {
        height: '20%',

        alignItems: 'center',
        justifyContent: 'space-evenly',

        flexDirection: 'row',
    },

    icon: {
        fontSize: 20
    }


})

export default styles;