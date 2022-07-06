import React, {useEffect, useState} from "react";
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View,} from "react-native";
import api from "../../services/api";
import styles from "./style";
import star from "../../assets/icons/star.png";
import {useNavigation} from "@react-navigation/native";

interface Movies {
    id: string;
    title: string;
    poster_path: string;
    release_date: string;
    runtime: string;
    vote_average: string;
    vote_count: string;
}

const apiKey = "api_key=cd70ccaa5142525fa97293402321f923";
const language = "language=pt-BR";
const img = "https://image.tmdb.org/t/p/original";

export const CardCatalogo = () => {

    const [listaFilmes, setListFilmes] = useState<Movies[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        const init = async () => {
            const response = await api.get(
                `movie/popular?${apiKey}&${language}&page=1`
            );
            setListFilmes(response.data.results);
        };
        init();
    }, []);

    function teste(id: string) {
        console.log(id)
        navigation.navigate("Filme", id)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={listaFilmes}
                renderItem={({item}) => {
                    return (
                        <ScrollView
                            contentContainerStyle={{width: "100%"}}
                            style={styles.cardAlign}
                        >
                            <TouchableOpacity onPress={() => teste(item.id)}>
                                {/* Criar o onPress pra abrir a tela de filme */}
                                <View style={[{flexDirection: "row"}]}>
                                    <Image
                                        source={{uri: `${img}${item.poster_path}`}}
                                        style={styles.poster}
                                    />
                                    <View style={styles.cardText}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <View style={styles.texts}>
                                            <Text style={styles.text}>{item.release_date}</Text>
                                            <Text style={styles.text}>{item.runtime}min</Text>
                                        </View>
                                        <View style={styles.texts}>
                                            <Image style={styles.star} source={star}/>
                                            <Text style={styles.text}>{item.vote_average}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    );
                }}
            />
        </View>
    );
};
