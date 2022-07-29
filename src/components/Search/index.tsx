import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native";

import GasStationContext from "../../contexts/GasStationContext";
import Icons from "../../assets/icons";
import { COLORS } from "../../utils/theme";

import styles from "./styles";
import Filter from "../Filters/Filter";
import GasStationSearch from "./GasStationSearch";
import Filters from "../Filters";

interface SearchProps {
    style?: any
}

export default function Search(props: SearchProps) {

    const { search, setSearch, isSearching, gasStationsToShow, setOpenGasStation} = useContext(GasStationContext);

    const [ focus, setFocus ] = useState(false);

    return (
        <View style={{...props.style, ...styles.container}}>
            
            <View style={styles.search} >
                <TextInput style={styles.input} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChangeText={setSearch} value={search} placeholder='Pesquise por um posto' placeholderTextColor={COLORS.gray} underlineColorAndroid='transparent' autoCorrect={false} selectionColor={COLORS.gray_transparent} />
                <View style={styles.icon}>
                    <Icons name="search" style={styles.icon.svg}/>
                </View>
            </View>

            {
                search != '' || focus ?

                    isSearching ?
                    
                        <ActivityIndicator size="small" color={COLORS.red}/>
                        
                    : 
                        <>

                            <Filters />

                            <FlatList 
                                data={gasStationsToShow} 
                                renderItem={(object) => <GasStationSearch gasStation={object.item} onPress={() => setOpenGasStation(object.item)} key={'search-' + object.index} />}
                                ListEmptyComponent={<Text style={styles.empty}>Nenhum posto encontrado...</Text>}
                            />

                        </>
                : null
            }
        </View>
    )
}