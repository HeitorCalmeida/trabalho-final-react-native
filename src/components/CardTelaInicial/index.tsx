import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface Card {
    foto?: any,
    acao?: any,
}

export const CardTelaInicial = ({ foto, acao }: Card) => {
    return (
        <TouchableOpacity onPress={acao} style={styles.container} >
            <Image style={styles.componente} source={foto}/>
        </TouchableOpacity>
    )
}
