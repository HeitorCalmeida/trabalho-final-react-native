import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "./style";
import Voltar from "../../assets/images/back.png";
import Estrela from "../../assets/icons/star.png";
import api from "../../services/api";
import { AuthContext } from "../../contexts/auth";

interface genresProps {
    map(arg0: (item: any) => JSX.Element): React.ReactNode;
    id: string;
    name: string;
}

interface Movies {
    id: string;
    overview: string;
    title: string;
    poster_path: string;
    release_date: string;
    runtime: string;
    vote_average: string;
    vote_count: string;
    genres: genresProps;
}

const apiKey = "api_key=cd70ccaa5142525fa97293402321f923";
const language = "language=pt-BR";
const img = "https://image.tmdb.org/t/p/original";

export const Filme = (props: any) => {
    const nome = useContext(AuthContext).nome;
    const idFilme = props.route.params;

    const [filme, setFilme] = useState<Movies>();

    useEffect(() => {
        const init = async () => {
            const response = await api.get(`movie/${idFilme}?${apiKey}&${language}`);
            setFilme(response.data);
        };
        init();
    }, []);

    return (
        <View style={styles.container}>
            {filme && (
                <>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Catalogo")}
                        >
                            <Image style={styles.buttonBack} source={Voltar} />
                        </TouchableOpacity>
                        <Text style={styles.titulo}>{filme.title}</Text>
                    </View>

                    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                        <View style={styles.poster}>
                            <Image
                                style={{ width: 190, height: 283, borderRadius: 15 }}
                                source={{ uri: `${img}${filme.poster_path}` }}
                            />
                        </View>
                        <Text style={styles.sinopse}>{filme.overview}</Text>
                        <Text style={styles.duracao}>Duração: {filme.runtime} min</Text>

                        <View style={styles.filmeinfo}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={styles.nota}>Nota</Text>
                                <Image style={styles.notaImg} source={Estrela} />
                                <Text style={styles.notaQtd}>{filme.vote_average}/10</Text>
                                <Text style={styles.notaVotos}>{filme.vote_count}</Text>
                            </View>
                            <View style={{ alignItems: "center", marginHorizontal: 25 }}>
                                <Text style={styles.genero}>Gênero</Text>
                                {filme.genres.map((item: any) => (
                                    <Text key={item.id} style={styles.generoTexto}>
                                        {item.name}
                                    </Text>
                                ))}
                            </View>
                        </View>
                        <Text style={styles.aval}>
                            Conte-nos o que achou do filme, {nome} !
                        </Text>
                        {/* inserir estrelas para avaliacao */}
                    </ScrollView>
                    <StatusBar hidden />
                </>
            )}
        </View>
    );
};
