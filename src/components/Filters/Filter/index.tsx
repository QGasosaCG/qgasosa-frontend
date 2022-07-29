import { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icons from "../../../assets/icons";

import GasStationContext from "../../../contexts/GasStationContext";
import styles from "./styles";

interface FilterProps {
    content: string,
    type: 'distance' | 'price' | 'favorite'
}

export default function Filter(props: FilterProps) {

    const { filter, setFilter } = useContext(GasStationContext);

    const [ isActive, setIsActive ] = useState(false);

    const colors = isActive ? styles.enabled : null;

    useEffect(() => {
        if(filter == props.type) setIsActive(true);
        else setIsActive(false);
    }, [filter])

    function handlePress() {
        if(filter == props.type) setFilter('')
        else setFilter(props.type);
    }

    return (
        <TouchableOpacity onPress={handlePress} style={{...styles.container, ...colors}} activeOpacity={0.8} >
            <Text style={{...styles.text, ...colors}}>{props.content}</Text>

            { isActive ? 
            
                <Icons name='close' style={{...styles.icon, ...colors}}/>
            
            : null}

        </TouchableOpacity>
    )
}