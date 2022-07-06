import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import Voltar from "../../assets/images/back.png";
import Estrela from "../../assets/icons/star.png";
import api from "../../services/api";
import { useRoute } from "@react-navigation/native";
interface Movies {
  id: string;
  overview: string;
  title: string;
  poster_path: string;
  release_date: string;
  runtime: string;
  vote_average: string;
  vote_count: string;
  genres: [
    {
      id: string;
      name: string;
    }
  ];
}

export const Filme = () => {
  const filme = {
    id: "string",
    overview:
      "O ex-vingador Clint Barton tem uma missão aparentemente simples: voltar para sua família no Natal. Será possível? Talvez com a ajuda de Kate Bishop, uma arqueira de 22 anos que sonha em se tornar uma super-heroína. Os dois são forçados a trabalhar juntos quando uma presença do passado de Barton ameaça descarrilar muito mais do que o espírito festivo.",
    title: "Gavião Arqueiro",
    runtime: "61",
    poster_path:
      "https://image.tmdb.org/t/p/original/62qfVDg4VK3kqZFxrRztPqSbal4.jpg",
    vote_average: "6.9",
    vote_count: "368.95",
    genres: [
      {
        id: '2',
        name: 'Ação',
      },
      {
        id: '3',
        name: 'Aventura',
      },
      {
        id: '4',
        name: 'Luta',
      },
    ]
  };

  const [listaFilmes, setListFilmes] = useState<Movies[]>([]);
  const [filmee, setFilme] = useState([]);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.buttonBack} source={Voltar} />
        <Text style={styles.titulo}>{filme.title}</Text>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image style={styles.poster} source={{ uri: filme.poster_path }} />
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
            {filme.genres.map(( item )=> <Text key={item.id} style={styles.generoTexto}>{item.name}</Text>)}
          </View>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </View>
  );
};
