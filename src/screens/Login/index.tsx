import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./style";

import Icon from "../../../assets/icon.png"

export const Login = () => {
    return (
        <View style={styles.fundoTela}>
            <Image source={Icon} style={styles.estiloIcon}/>
            <Text style={styles.bemVindo}>Bem vindo usuário!</Text>

            <TextInput style={styles.inputNome} placeholder={"Digite seu nome"} placeholderTextColor={"#474747"}/>
            <TouchableOpacity onPress={() => []}>
                <View style={styles.botaoEntrar}>
                    <Text style={styles.textoEntrar}>
                        Entrar
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )

    
}