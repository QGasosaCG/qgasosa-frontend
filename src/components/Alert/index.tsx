import { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

import styles from './styles';

interface AlertProps {
    sucess?: boolean
    show?: boolean
    text: string 
}

export default function Alert(props: AlertProps) {

    return (
        <View style={{...styles.container, display: props.show ? 'flex' : 'none'}}>
            <View style={{...styles.content, backgroundColor: props.sucess ? 'green' : 'red'} }>
                <Text>{props.text}</Text>
            </View>
        </View>
    )
}