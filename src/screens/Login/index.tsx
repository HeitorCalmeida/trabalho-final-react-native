import React, { useContext, useState } from "react";
import { AsyncStorage, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "../../../assets/icon.png";
import { AuthContext } from "../../contexts/auth";
import styles from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackList } from "../../rotas";

type LoginProps = NativeStackScreenProps<StackList, "Login">

export const Login = ({ navigation }: LoginProps) => {

    const nome = useContext(AuthContext).nome;
    const setNome = useContext(AuthContext).setNome;

    function gravar() {

        try {
            AsyncStorage.setItem('@nome_api', nome)
        } catch (e) {
            alert(e);
        }
    }

    function entrar() {
        if (nome !== '') {
            navigation.navigate('DrawerTelaInicial');
            gravar();
        }
    }

    return (
        <View style={styles.fundoTela}>
            <Image source={Icon} style={styles.estiloIcon} />
            <Text style={styles.bemVindo}>Bem vindo usuário!</Text>

            <TextInput
                style={styles.inputNome}
                value={nome}
                onChangeText={(text) => setNome(text)}
                placeholder={"Digite seu nome"}
                placeholderTextColor={"#474747"} />

            <TouchableOpacity onPress={() => entrar()}>
                <View style={styles.botaoEntrar}>
                    <Text style={styles.textoEntrar}>
                        Entrar
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
