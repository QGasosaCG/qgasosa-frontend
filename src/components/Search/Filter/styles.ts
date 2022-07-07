import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../utils/theme";

const styles = StyleSheet.create({

    container: {
        marginLeft: 5
    },

    filterEnabled: {
        borderColor: COLORS.red,
        color: COLORS.red,
    },

    text: {
        fontSize: 12,

        borderWidth: 1,
        borderRadius: 2,

        borderColor: COLORS.gray,
        color: COLORS.gray,

        paddingHorizontal: 5,
        paddingTop: 3,
        paddingBottom: 2,

        fontFamily: FONTS.regular
    }

})

export default styles;