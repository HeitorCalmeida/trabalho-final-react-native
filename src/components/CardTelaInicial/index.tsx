import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Card {
    titulo: string,
    foto?: any,
    acao?: any,
}

export const CardTelaInicial = ({ titulo, foto, acao }: Card) => {
    return (
        <TouchableOpacity onPress={acao} style={styles.container} >
            <Text style={styles.texto1}>{titulo}</Text>
        </TouchableOpacity>
    )
}
