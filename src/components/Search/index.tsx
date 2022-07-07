import { useContext, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, View } from "react-native";

import GasStationContext from "../../contexts/GasStationContext";
import { SearchIcon } from "../../assets/icons";
import { COLORS } from "../../utils/theme";

import styles from "./styles";
import Filter from "./Filter";
import GasStationSearch from "./GasStationSearch";

interface SearchProps {
    style?: any
}

export default function Search(props: SearchProps) {

    const { search, setSearch, isSearching, gasStationsToShow } = useContext(GasStationContext);

    const [ focus, setFocus ] = useState(false);

    return (
        <View style={{...props.style, ...styles.container}}>
            <View style={styles.search} >
                <TextInput style={styles.input} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChangeText={setSearch} value={search} placeholder='Pesquise por um posto' placeholderTextColor={COLORS.gray} underlineColorAndroid='transparent' autoCorrect={false} selectionColor={COLORS.gray_transparent} />
                <SearchIcon color={COLORS.red} width={50} height={15} />
            </View>

            {
                search != '' || focus ?

                    isSearching ?
                    
                        <ActivityIndicator size="small" color={COLORS.red}/>
                    : 
                        <>

                            <View style={styles.filters}>

                                <Text style={styles.filtersTitle}>Filtra por:</Text>
                                <View style={{ flexDirection: 'row'}}>
                                    <Filter content='Distância' type='distance'/>
                                    <Filter content='Preço' type='price'/>
                                    <Filter content='Favoritos' type='favorite'/>
                                </View>

                            </View>
                            <ScrollView>

                                {

                                    gasStationsToShow.length == 0 ?

                                        <Text style={styles.empty}>Nenhum posto encontrado...</Text>

                                    :

                                        gasStationsToShow.map((gasStation, index) => {
                                            return <GasStationSearch gasStation={gasStation} onClick={() => console.log('teste')} key={'search-' + index} />
                                        })
                                }

                            </ScrollView>

                        </>
                : null
            }
        </View>
    )
}