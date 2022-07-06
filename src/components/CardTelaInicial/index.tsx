import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Card {
    titulo: string,
    foto: any,
}

export const CardTelaInicial = ({titulo, foto}:Card) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.texto1}>{titulo}</Text>
        </TouchableOpacity>
    )
}