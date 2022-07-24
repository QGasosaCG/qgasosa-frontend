import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../utils/theme";

const styles = StyleSheet.create({

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

})

export default styles;