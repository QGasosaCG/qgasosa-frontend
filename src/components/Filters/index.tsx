import { Text, View } from "react-native";

import styles from "./styles";
import Filter from "../Filters/Filter";

export default function Filters() {

    return (

        <View style={styles.filters}>

            <Text style={styles.filtersTitle}>Filtrar por:</Text>
            <View style={{ flexDirection: 'row'}}>
                <Filter content='Distância' type='distance'/>
                <Filter content='Preço' type='price'/>
                <Filter content='Favoritos' type='favorite'/>
            </View>

        </View>

    )
}