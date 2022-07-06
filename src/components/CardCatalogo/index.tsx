import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import api from "../../services/api";
import styles from "./style"
import star from "../../assets/icons/star.png"

interface Movies {
    id: string,
    title: string,
    poster_path: string,
    release_date: string,
    runtime: string,
    vote_average: string,
    vote_count: string,
}

// https://image.tmdb.org/t/p/original

export const CardCatalogo = () => {
    const [MovieList, setMovieList] = useState<Movies[]>([
        {
            id: "12873516",
            title: "Lightyear",
            poster_path: 'https://image.tmdb.org/t/p/original/wc3cGQUF4P2Jetawf7YqzaWQsNc.jpg',
            release_date: "2022-06-15",
            runtime: "107",
            vote_average: "7.0",
            vote_count: "406",
        }, {
            id: "1287351",
            title: "Lightyear",
            poster_path: 'https://image.tmdb.org/t/p/original/wc3cGQUF4P2Jetawf7YqzaWQsNc.jpg',
            release_date: "2022-06-15",
            runtime: "107",
            vote_average: "7.0",
            vote_count: "406",
        }, {
            id: "287351",
            title: "Lightyear",
            poster_path: 'https://image.tmdb.org/t/p/original/wc3cGQUF4P2Jetawf7YqzaWQsNc.jpg',
            release_date: "2022-06-15",
            runtime: "107",
            vote_average: "7.0",
            vote_count: "406",
        }, {
            id: "12873519",
            title: "Lightyear",
            poster_path: 'https://image.tmdb.org/t/p/original/wc3cGQUF4P2Jetawf7YqzaWQsNc.jpg',
            release_date: "2022-06-15",
            runtime: "107",
            vote_average: "7.0",
            vote_count: "406",
        }, {
            id: "12873568",
            title: "Lightyear",
            poster_path: 'https://image.tmdb.org/t/p/original/wc3cGQUF4P2Jetawf7YqzaWQsNc.jpg',
            release_date: "2022-06-15",
            runtime: "107",
            vote_average: "7.0",
            vote_count: "406",
        }, {
            id: "1283516",
            title: "Lightyear",
            poster_path: 'https://image.tmdb.org/t/p/original/wc3cGQUF4P2Jetawf7YqzaWQsNc.jpg',
            release_date: "2022-06-15",
            runtime: "107",
            vote_average: "7.0",
            vote_count: "406",
        },
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                data={MovieList}
                renderItem={({ item }) => {
                    return (
                        <ScrollView contentContainerStyle={{ width: "100%" }} style={styles.cardAlign}>
                            <TouchableOpacity>
                                {/* Criar o onPress pra abrir a tela de filme */}
                                <View style={[{ flexDirection: "row" }]}>
                                    <Image source={{ uri: item.poster_path }} style={styles.poster} />
                                    <View style={styles.cardText}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <View style={styles.texts}>
                                            <Text style={styles.text}>{item.release_date}</Text>
                                            <Text style={styles.text}>{item.runtime}min</Text>
                                        </View>
                                        <View style={styles.texts}>
                                            <Image style={styles.star} source={star} />
                                            <Text style={styles.text}>{item.vote_average}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    )
                }}
            />
        </View >
    )
}