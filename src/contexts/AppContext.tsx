import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import Alert from "../components/Alert";

interface AppContextProps {
    alert: any
    alertError: (text: string) => void
    alertSucess: (text: string) => void

    storage: any,
    updateStorage: (updatedStorage: any) => void

    success: boolean
    showSuccess: () => void
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider(props: any) {

    const [ storage, setStorage ] = useState({});

    const [ alert, setAlert ] = useState(<Alert text='' />);

    const [ success, setSuccess ] = useState(false);

    function showSuccess() {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    }

    function alertError(text: string) {
        setAlert(<Alert text={text} show />);
        setTimeout(() => setAlert(<Alert text={text} />), 3000);
    }

    function alertSucess(text: string) {
        setAlert(<Alert text={text} show sucess/>);
        setTimeout(() => setAlert(<Alert text={text} sucess/>), 3000);
    }

    async function updateStorage(updatedStorage: any) {

        try {
            
            await AsyncStorage.setItem('qgasosa@storage', JSON.stringify(updatedStorage));
            getStorage();

        } catch(e) {
            console.log(e)
        }
    }

    async function getStorage() {

        try {
        
            // await AsyncStorage.removeItem('qgasosa@storage')

            let storage = await AsyncStorage.getItem('qgasosa@storage');
        
            if( !storage ) { 

                await AsyncStorage.setItem('qgasosa@storage', JSON.stringify({
                    favoritesGasStations: [],
                    consumption: 0
                }));
                storage = await AsyncStorage.getItem('qgasosa@storage');
            }

            // console.log(storage);

            setStorage(JSON.parse(storage || ''));

        } catch(e) {
            console.log(e)
        }

    }

    useEffect(() => {
        getStorage()
    }, [])

    return (
        <AppContext.Provider value={{
            alert,
            alertError,
            alertSucess,

            storage,
            updateStorage,

            success,
            showSuccess
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;
