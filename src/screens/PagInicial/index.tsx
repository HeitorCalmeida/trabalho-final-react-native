import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from "./style"
import { CardInicial } from './../../components/cardInicial/index';


export const PagInicial = () => {

    return (
        <View style={styles.container}>
            <Text style={[{ color: "#fff" }]}>Projeto React Native Grupo 2</Text>
            <StatusBar style="auto" />
            <CardInicial />
        </View>
    );
}

