import { useContext } from 'react';
import { View, useColorScheme  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonConsumption from '../../components/ButtonConsumption';
import Refuel from '../../components/Refuel';
import Search from '../../components/Search';
import Map from '../../components/Map';
import ConsumptionContext from '../../contexts/ConsumptionContext';
import Consumption from '../../components/Consumption';
import RefuelContext from '../../contexts/RefuelContext';

import styles from './styles';

export default function Home() {

    const { openModal: openConsumptionModal } = useContext(ConsumptionContext);
    const { openModal: openRefuelModal } = useContext(RefuelContext);

    const color = useColorScheme();

    return (
        <SafeAreaView style={styles.container}>
            
            <Map style={styles.map}/>

            <Search style={styles.search} />

            <View style={styles.content}>

                <Consumption/>

                <View style={styles.flexRow}>
                    <Refuel onPress={openRefuelModal} />
                    <ButtonConsumption onPress={openConsumptionModal} />
                </View>
            </View>

        </SafeAreaView>
    )
}
