import React, { useState } from "react";
import styles from "./style";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "../../../assets/icon.png"


export const Login = ({ navigation }: any) => {

    const [name, setName] = useState('');

    return (
        <View style={styles.fundoTela}>
            <Image source={Icon} style={styles.estiloIcon} />
            <Text style={styles.bemVindo}>Bem vindo usuário!</Text>

            <TextInput
                style={styles.inputNome}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder={"Digite seu nome"}
                placeholderTextColor={"#474747"} />

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
