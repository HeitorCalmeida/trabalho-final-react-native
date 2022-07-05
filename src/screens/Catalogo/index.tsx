import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import { CardCatalogo } from "../../components/CardCatalogo";
import api from "../../services/api";
import styles from "./style";
import Voltar from "../../assets/images/back.png";

const apiKey = "api_key=cd70ccaa5142525fa97293402321f923";
const language = "language=pt-BR";

export const Catalogo = () => {
  function Click() {
    //seta no contexto a posicao do filme
  }

  function filmes() {
    const init = async () => {
      const response = await api.get("");
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.buttonBack} source={Voltar} />
        <Text style={styles.titulo}>Filmes</Text>
      </View>
      <CardCatalogo />
      <StatusBar hidden />
    </View>
  );
};
