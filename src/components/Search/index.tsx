import { useContext } from "react";
import { TextInput, View } from "react-native";

import GasStationContext from "../../contexts/GasStationContext";
import { SearchIcon } from "../../assets/icons/icons";
import { COLORS } from "../../utils/theme";

import styles from "./styles";

export default function Search() {

    const { search, setSearch } = useContext(GasStationContext);

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setSearch} value={search} placeholder='Pesquise por um posto' placeholderTextColor={COLORS.gray} underlineColorAndroid='transparent' autoCorrect={false} selectionColor={COLORS.gray_transparent} />
            <SearchIcon color={COLORS.red} width={50} height={15} />
        </View>
    )
}