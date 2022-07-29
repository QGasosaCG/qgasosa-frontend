import { createContext, useState } from "react";

interface RefuelContextProps {
    
    isModalOpen: boolean,
    openModal: () => void
    closeModal: () => void

}

const RefuelContext = createContext<RefuelContextProps>({} as RefuelContextProps);

export function RefuelProvider(props: { children: any}) {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <RefuelContext.Provider value={{
            isModalOpen,
            openModal,
            closeModal
        }}>
            {props.children}
        </RefuelContext.Provider>
    )
}

export default RefuelContext;