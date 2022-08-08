import { createContext, useContext, useEffect, useState } from "react";
import AppContext from "./AppContext";

interface ConsumptionContextProps {
    isModalOpen: boolean,
    openModal: () => void
    closeModal: () => void

    litersFilled: number
    setLitersFilled: (new_value: number) => void

    kilometersDriven: number
    setKilometersDriven: (new_value: number) => void

    consumptionCalculated: number
    consumption: number

    saveConsumption: () => void

}

const ConsumptionContext = createContext<ConsumptionContextProps>({} as ConsumptionContextProps);

export function ConsumptionProvider(props: any) {

    const { storage, updateStorage, showSuccess } = useContext(AppContext);

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ litersFilled, setLitersFilled ] = useState(0);
    const [ kilometersDriven, setKilometersDriven ] = useState(0);

    const [ consumptionCalculated, setConsumptionCalculated ] = useState(0);
    const [ consumption, setConsumption ] = useState(0);

    useEffect(() => {

        let calculation = 0;

        if(litersFilled > 0 && kilometersDriven > 0) {
            calculation = kilometersDriven/litersFilled;
        }

        setConsumptionCalculated(calculation);

    }, [litersFilled, kilometersDriven])

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function saveConsumption() {

        try {
        
            if (consumptionCalculated > 0) {

                let temp = consumption + consumptionCalculated / 2;
    
                if(consumption == 0) temp = consumptionCalculated;

                updateStorage({
                    ...storage,
                    consumption: temp
                })
    
                setConsumption(temp);
                setConsumptionCalculated(0);
                setLitersFilled(0);
                setKilometersDriven(0);

                closeModal();

                showSuccess();

            }
            
        } catch(e) {
            console.log(e)
        }

    }

    useEffect(() => {
        setConsumption(storage.consumption)
    }, [storage])

    return (
        <ConsumptionContext.Provider value={{
            isModalOpen,
            openModal,
            closeModal,

            litersFilled,
            setLitersFilled,

            kilometersDriven,
            setKilometersDriven,

            consumptionCalculated,
            consumption,

            saveConsumption
        }}>
            {props.children}
        </ConsumptionContext.Provider>
    )
}

export default ConsumptionContext;
