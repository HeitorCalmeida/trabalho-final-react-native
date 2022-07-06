import React from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./style";

import Icon from "../../../assets/icon.png"

export const Login = ({navigation}: any) => {
    return (
        <View style={styles.fundoTela}>
            <Image source={Icon} style={styles.estiloIcon}/>
            <Text style={styles.bemVindo}>Bem vindo usuário!</Text>

            <TextInput style={styles.inputNome} placeholder={"Digite seu nome"} placeholderTextColor={"#474747"}/>

            <TouchableOpacity onPress={() => navigation.navigate('Catalogo')}>
                <View style={styles.botaoEntrar}>
                    <Text style={styles.textoEntrar}>
                        Entrar
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
                <View style={styles.botaoEntrar}>
                    <Text style={styles.textoEntrar}>
                        Tela Inicial
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )


}
