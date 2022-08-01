import { createContext, useContext, useEffect, useState } from "react";
import { Camera } from 'expo-camera';
import AppContext from "./AppContext";

interface InvoiceContextProps {
    hasCameraPermission: boolean

    cameraHasToBeOpen: boolean
    openCamera: () => void
    closeCamera: () => void

    sendImage: () => void
}

const InvoiceContext = createContext<InvoiceContextProps>({} as InvoiceContextProps);

export function InvoiceProvider(props: any) {

    const [hasCameraPermission, setHasCameraPermission] = useState(false);
    const [cameraHasToBeOpen, setCameraHasToBeOpen] = useState(false);

    const { showSuccess } = useContext(AppContext);

    function openCamera() {
        setCameraHasToBeOpen(true);
    }

    function closeCamera() {
        setCameraHasToBeOpen(false);
    }

    function sendImage() {
        setCameraHasToBeOpen(false);
        showSuccess();
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
    }, []);

    return (
        <InvoiceContext.Provider value={{
            hasCameraPermission,
            
            cameraHasToBeOpen,
            openCamera,
            closeCamera,

            sendImage
        }}>
            {props.children}
        </InvoiceContext.Provider>
    )
}

export default InvoiceContext;
