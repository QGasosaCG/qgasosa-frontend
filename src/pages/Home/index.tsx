import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/ButtonConsumption';
import Refuel from '../../components/Refuel';
import Search from '../../components/Search';
import styles from './styles';

export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>

                <Search />

                <View style={styles.flexRow}>
                    <Refuel onPress={() => console.log()} />
                    <Button onPress={() => console.log()} />
                </View>
            </View>
        </SafeAreaView>
    )
}
