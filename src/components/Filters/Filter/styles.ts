import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../utils/theme";

const styles = StyleSheet.create({

    container: {
        marginLeft: 5,

        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 2,

        borderColor: COLORS.gray,

        alignItems: 'center',

        paddingHorizontal: 5,
        height: 20,
    },

    enabled: {
        borderColor: COLORS.red,
        color: COLORS.red,
    },

    text: {
        fontSize: 12,
        fontFamily: FONTS.regular,

        color: COLORS.gray,
    },

    icon: {
        fontSize: 5,

        marginLeft: 5
    }

})

export default styles;