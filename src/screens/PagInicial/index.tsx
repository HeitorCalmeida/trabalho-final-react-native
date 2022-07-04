import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export const PagInicial = () => {
    return (
        <View style={styles.container}>
            <Text>Projeto React Native Grupo 2</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
