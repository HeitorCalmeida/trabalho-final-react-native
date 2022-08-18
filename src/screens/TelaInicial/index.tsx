import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, Button } from 'react-native';
import styles from "./style"
import filmes from "../../assets/icons/filmes.png"
import tv from "../../assets/icons/tv.png"
import acaof from "../../assets/images/acaof.png"
import comediaf from "../../assets/images/comediaf.png"
import dramaf from "../../assets/images/dramaf.png"
import popularf from "../../assets/images/popularf.png"
import acaos from "../../assets/images/acaos.png"
import comedias from "../../assets/images/comedias.png"
import dramas from "../../assets/images/dramas.png"
import populars from "../../assets/images/populars.png"

import { CardTelaInicial } from '../../components/CardTelaInicial';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TelaInicial = ({navigation}:any) => {

    return (
        <ScrollView style={styles.container}>
            <Button onPress={()=>{
                AsyncStorage.removeItem('token');
                navigation.navigate('Login');
                }} title='logout'/>
        
            <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 40, }}>
                <Image source={filmes} style={styles.image} />
                <Text style={styles.texto1}>Filmes</Text>
            </View>

            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial acao={() => navigation.navigate('Catalogo')} foto={popularf} />
                <CardTelaInicial foto={dramaf} />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial foto={comediaf} />
                <CardTelaInicial foto={acaof} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Image source={tv} style={styles.image2} />
                <Text style={styles.texto2}>Streaming e TV</Text>
            </View>

            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial foto={populars} />
                <CardTelaInicial foto={dramas} />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial foto={comedias} />
                <CardTelaInicial foto={acaos} />
            </View>

            <StatusBar hidden />
        </ScrollView>
    );
}

