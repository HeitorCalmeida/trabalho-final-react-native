import {StatusBar} from "expo-status-bar";
import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {CardCatalogo} from "../../components/CardCatalogo";
import styles from "./style";
import Voltar from "../../assets/images/back.png";

export const Catalogo = ({navigation}:any) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image style={styles.buttonBack} source={Voltar}/>
                </TouchableOpacity>
                <Text style={styles.titulo}>Filmes</Text>
            </View>
            <CardCatalogo/>
            <StatusBar hidden/>
        </View>
    );
};
