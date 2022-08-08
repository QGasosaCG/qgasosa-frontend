import { useEffect, useState } from "react"
import { Text, TextInput, TouchableHighlight, View } from "react-native"

import Icons from "../../assets/icons"
import { COLORS } from "../../utils/theme"

import styles from './styles'

interface NumberInputProps {
    value: number,
    setValue: (new_value: number) => void

    label: string,
    toFixed?: boolean,
    controls?: boolean,

    style?: any
}

export default function NumberInput(props: NumberInputProps) {

    function increase() {
        props.setValue(props.value + 1);
    }

    function decrease() {
        let value = props.value - 1;
        
        if (value <= 0) props.setValue(0);
        else props.setValue(value);
    }

    function setValue(text: string) {

        if(!text) props.setValue(0);
        else {
            props.setValue(parseInt(text))
        }

    }

    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.label}>{props.label}</Text>
          
            <View style={styles.inputContainer}>
                
                <TextInput style={styles.input} value={props.value.toString()} onChangeText={setValue} keyboardType='numeric' selectionColor={COLORS.gray_transparent} />
                
                { props.controls ?
                    <View style={styles.arrows}>
                        <TouchableHighlight style={styles.touchable} onPress={increase} underlayColor={COLORS.gray_transparent}>
                            <Icons name='arrow' style={{ ...styles.arrow }}/>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.touchable} onPress={decrease} underlayColor={COLORS.gray_transparent}>
                            <Icons name='arrow' style={{ ...styles.arrow, ...styles.arrowRotated }}/>
                        </TouchableHighlight>
                    </View>
                : null }

            </View>
        </View>
    )

}