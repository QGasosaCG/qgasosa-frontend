import { useContext } from "react";
import { KeyboardAvoidingView, Modal, Text, View } from "react-native";

import Icons from "../../assets/icons";
import AppContext from "../../contexts/AppContext";

import styles from './styles'

export default function Success() {

    const { success } = useContext(AppContext);

    return (
        <Modal animationType='fade' visible={success} statusBarTranslucent transparent>
            <KeyboardAvoidingView behavior='padding' style={styles.background}>
                <View style={styles.content}>
                    <Icons name='ok' style={styles.icon}/>
                    <Text style={styles.title}>Obrigado!</Text>
                    <Text style={styles.text}>Desse jeito você colabora para melhorarmos cada vez mais!</Text>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}