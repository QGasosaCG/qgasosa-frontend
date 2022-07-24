import { createContext, useState } from "react";
import Alert from "../components/Alert";

interface AppContextProps {
    alert: any
    alertError: (text: string) => void
    alertSucess: (text: string) => void
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider(props: any) {

    const [alert, setAlert] = useState(<Alert text='' />);

    function alertError(text: string) {
        setAlert(<Alert text={text} show />);
        setTimeout(() => setAlert(<Alert text={text} />), 3000);
    }

    function alertSucess(text: string) {
        setAlert(<Alert text={text} show sucess/>);
        setTimeout(() => setAlert(<Alert text={text} sucess/>), 3000);
    }

    return (
        <AppContext.Provider value={{
            alert,
            alertError,
            alertSucess
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;
