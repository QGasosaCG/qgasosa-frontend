import { useContext, useState } from "react";
import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native";

import GasStationContext from "../../contexts/GasStationContext";
import Icons from "../../assets/icons";
import { COLORS } from "../../utils/theme";

import styles from "./styles";
import GasStationSearch from "./GasStationSearch";
import Filters from "../Filters";
import GasStation from "../../models/GasStation";

interface SearchProps {
    style?: any
}

export default function Search(props: SearchProps) {

    const { search, setSearch, isSearching, gasStationsToShow, setOpenGasStation, cleanGasStationsToShow, setFilter} = useContext(GasStationContext);

    const [ focus, setFocus ] = useState(false);

    function onFocus() {
        setFocus(true)
    }

    function onBlur() {
        setFocus(false)
        cleanGasStationsToShow()
        setSearch('')
        setFilter('distance')
    }

    function pressGasStation(pressed: GasStation) {
        setOpenGasStation(pressed);
    }

    return (
        <View style={{...props.style, ...styles.container}}>
            
            <View style={styles.search} >
                <TextInput style={styles.input} onFocus={onFocus} onBlur={onBlur} onChangeText={setSearch} value={search} placeholder='Pesquise por um posto' placeholderTextColor={COLORS.gray} underlineColorAndroid='transparent' autoCorrect={false} selectionColor={COLORS.gray_transparent} />
                <View style={styles.icon}>
                    <Icons name="search" style={styles.icon.svg}/>
                </View>
            </View>

            { focus ?

                <>
                    <Filters/>
                
                    { isSearching ? 
                            <View style={styles.loading}>
                                <ActivityIndicator color={COLORS.red}/>
                            </View>
                        :
        
                        <FlatList 
                            data={gasStationsToShow} 
                            renderItem={(object) => <GasStationSearch gasStation={object.item} onPress={() => pressGasStation(object.item)} key={'search-' + object.index} />}
                            ListEmptyComponent={<Text style={styles.empty}>Nenhum posto encontrado...</Text>}
                        />
                    }
                </>
            : null }

        </View>
    )
}