import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import Voltar from "../../assets/images/back.png";

interface Movies {
  id: string;
  title: string;
  runtime: string;
  poster_path: string;
  vote_average: string;
  vote_count: string;
}

export const Filme = () => {
  const item = {
    id: "string",
    overview: "O ex-vingador Clint Barton tem uma missão aparentemente simples: voltar para sua família no Natal. Será possível? Talvez com a ajuda de Kate Bishop, uma arqueira de 22 anos que sonha em se tornar uma super-heroína. Os dois são forçados a trabalhar juntos quando uma presença do passado de Barton ameaça descarrilar muito mais do que o espírito festivo.",
    name: "Gavião Arqueiro",
    runtime: "61",
    poster_path: "https://image.tmdb.org/t/p/original/62qfVDg4VK3kqZFxrRztPqSbal4.jpg",
    vote_average: "string",
    vote_count: "string",
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.buttonBack} source={Voltar} />
        <Text style={styles.titulo}>{item.name}</Text>
      </View>
      <Image style={styles.poster} source={{ uri: item.poster_path }} />
      <Text style={styles.sinopse}>{item.overview}</Text>
      <Text style={styles.duracao}>Duração: {item.runtime} min</Text>
      <View style={styles.filmeinfo}></View>
      <StatusBar hidden />
    </View>
  );
};
