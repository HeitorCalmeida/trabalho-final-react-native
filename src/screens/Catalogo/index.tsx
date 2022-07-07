import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CardCatalogo } from "../../components/CardCatalogo";
import styles from "./style";
import Voltar from "../../assets/images/back.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackList } from "../../rotas";

type LoginProps = NativeStackScreenProps<StackList,"Login">

export const Catalogo = ({ navigation }: LoginProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('DrawerTelaInicial')}>
                    <Image style={styles.buttonBack} source={Voltar} />
                </TouchableOpacity>
                <Text style={styles.titulo}>Filmes</Text>
            </View>
            <CardCatalogo />
            <StatusBar hidden />
        </View>
    );
};
