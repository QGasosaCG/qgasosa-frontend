import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../utils/theme";

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'column'
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3
    },

    distance: {
        color: COLORS.gray,
        fontFamily: FONTS.regular,
        marginLeft: 10
    },

    title: {
        color: COLORS.red,
        fontFamily: FONTS.bold,
        fontSize: 18,
        width: 200
    },

    favoriteIcon: {
        fontSize: 12,
        color: COLORS.red,
        marginRight: 5
    },

    fuel: {
        fontSize: 9,
        marginLeft: 5,
        fontFamily: FONTS.regular,
        color: COLORS.gray,
    },

    money: {
        fontFamily: FONTS.bold,
    },

    address: {
        color: COLORS.blue,
        fontFamily: FONTS.regular,
        fontSize: 11,
        width: 130,
        marginLeft: 5
    },

    locationIcon: {
        fontSize: 10,
        color: COLORS.blue
    }

})

export default styles;