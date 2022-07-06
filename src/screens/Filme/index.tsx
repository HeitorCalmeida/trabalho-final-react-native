import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import Voltar from "../../assets/images/back.png";
import Estrela from "../../assets/icons/star.png";
import api from "../../services/api";
import { AuthContext, AuthProvider } from './../../contexts/auth';

interface Movies {
    id: string,
    overview: string,
    title: string,
    poster_path: string,
    release_date: string,
    runtime: string,
    vote_average: string,
    vote_count: string,
    genres: [
        {
            id: string,
            name: string,
        },]
}

const apiKey = "api_key=cd70ccaa5142525fa97293402321f923";
const language = "language=pt-BR";
const img = "https://image.tmdb.org/t/p/original";

export const Filme = (props: any) => {
    const idFilme = props.route.params;
    const mec = {
        genres: [
            {
                id: '10759',
                name: 'Action & Adventure',
            },
            {
                id: '18',
                name: 'Drama',
            }
        ],
    }

    const nome = useContext(AuthContext).nome

    const [filmee, setFilme] = useState<Movies[]>([]);

    useEffect(() => {
        const init = async () => {
            const response = await api.get(
                `movie/${idFilme}?${apiKey}&${language}`
            );
            setFilme(response.data);
        };
        init();
    }, []);

    const obj = JSON.stringify(filmee);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.buttonBack} source={Voltar} />
                <Text style={styles.titulo}>{filmee.title}</Text>
            </View>
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <Image style={styles.poster} source={{ uri: `${img}${filmee.poster_path}` }} />
                <Text style={styles.sinopse}>{filmee.overview}</Text>
                <Text style={styles.duracao}>Duração: {filmee.runtime} min</Text>

                <View style={styles.filmeinfo}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.nota}>Nota</Text>
                        <Image style={styles.notaImg} source={Estrela} />
                        <Text style={styles.notaQtd}>{filmee.vote_average}/10</Text>
                        <Text style={styles.notaVotos}>{filmee.vote_count}</Text>
                    </View>
                    <View style={{ alignItems: "center", marginHorizontal: 25 }}>
                        <Text style={styles.genero}>Gênero</Text>
                        <FlatList

                            data={filmee.genres}
                            renderItem={({ item }) => {
                                return (
                                    <Text style={styles.generoTexto}>{item.name}</Text>
                                )
                            }}
                        />
                    </View>
                    <TextInput
                        style={styles.filmeinfo}
                        placeholder={`Insira sua Avaliacao abaixo ${nome} !`}
                        placeholderTextColor={"#474747"} />
                </View>
            </ScrollView>
            <StatusBar hidden />
        </View>
    );
};
