import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
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

export const TelaInicial = ({ navigation }: any) => {

    return (
        <View style={styles.container}>


            <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 40, }}>
                <Image source={filmes} style={styles.image} />
                <Text style={styles.texto1}>Filmes</Text>

            </View>

            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial acao={() => navigation.navigate('Catalogo')} titulo='Filmes Populares' />
                <CardTelaInicial titulo='Filmes de Drama' />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial titulo='Filmes de Comédia' />
                <CardTelaInicial titulo='Filmes de Ação' />
            </View>


            <View style={{ flexDirection: 'row' }}>
                <Image source={tv} style={styles.image2} />
                <Text style={styles.texto2}>Streaming e TV</Text>

            </View>
            
            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial titulo='Séries Populares' />
                <CardTelaInicial titulo='Séries de Drama' />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial titulo='Séries de Comédia' />
                <CardTelaInicial titulo='Séries de Ação' />
            </View>

            <StatusBar hidden />
        </View>
    );
}

