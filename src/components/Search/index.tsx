import { useContext } from "react";
import { TextInput, View } from "react-native";

import GasStationContext from "../../contexts/GasStationContext";
import { SearchIcon } from "../../assets/icons/icons";
import { COLORS } from "../../utils/theme";

import styles from "./styles";

interface SearchProps {
    style?: any
}

export default function Search(props: SearchProps) {

    const { search, setSearch } = useContext(GasStationContext);

    return (
        <View style={{...props.style, ...styles.container}}>
            <TextInput style={styles.input} onChangeText={setSearch} value={search} placeholder='Pesquise por um posto' placeholderTextColor={COLORS.gray} underlineColorAndroid='transparent' autoCorrect={false} selectionColor={COLORS.gray_transparent} />
            <SearchIcon color={COLORS.red} width={50} height={15} />
        </View>
    )
}