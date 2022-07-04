import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./style"

export const PagInicial = () => {
    return (
        <View style={styles.container}>
            <Text>Projeto React Native Grupo 2</Text>
            <StatusBar style="auto" />
        </View>
    );
}

