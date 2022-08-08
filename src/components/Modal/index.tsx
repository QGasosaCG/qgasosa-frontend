import { KeyboardAvoidingView, Modal as PopUp, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Icons from '../../assets/icons'

import styles from './styles';

interface ModalProps {
    visible: boolean
    close: () => void
    children: any
}

export default function Modal(props: ModalProps) {
    return (
        <PopUp animationType='slide' visible={props.visible} statusBarTranslucent transparent>
            <KeyboardAvoidingView behavior='padding' style={styles.background}>

                <TouchableOpacity onPress={props.close} activeOpacity={0.8} style={styles.close}>
                    <Icons name="close" style={styles.close.svg} />
                </TouchableOpacity>

                <View style={styles.content}>
                    {props.children}
                </View>

            </KeyboardAvoidingView>
        </PopUp>
    )
}