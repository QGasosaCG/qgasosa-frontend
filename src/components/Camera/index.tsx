import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Camera as CameraComponent, CameraType } from 'expo-camera'

import InvoiceContext from "../../contexts/InvoiceContext";
import Icons from "../../assets/icons";

import styles from './styles'

export default function Camera() {

    const { hasCameraPermission, cameraHasToBeOpen, closeCamera } = useContext(InvoiceContext);

    if (!hasCameraPermission) return null;

    if (!cameraHasToBeOpen) return null;
        
    return (
        <View style={styles.container}>
            <CameraComponent style={styles.camera} type={CameraType.back} />
            
            <View style={styles.options}>
                <TouchableOpacity activeOpacity={0.8} onPress={closeCamera}>
                    <Icons name='close' style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={closeCamera}>
                    <Icons name='ok' style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )

}