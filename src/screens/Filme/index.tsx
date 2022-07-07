import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import NumericInput from 'react-native-numeric-input'
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
import { Avaliacao } from "./../../components/Avaliacao/index";
import axios from "axios";

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

  //MUDE PARA SEU IPv4 - Use o comando "ipconfig" no terminal para visualizar seu IPv4 ex:000.000.0.000.
  const ip = "192.168.1.222";
  //MUDE PARA SEU IPv4

  const [filme, setFilme] = useState<Movies>();
  const [nota, setNota] = useState<number>()
  const nome = useContext(AuthContext).nome;
  const idFilme = props.route.params;

  useEffect(() => {
    const init = async () => {
      const response = await api.get(`movie/${idFilme}?${apiKey}&${language}`);
      setFilme(response.data);
    };
    init();
  }, []);

  function enviarAvaliacao() {
    axios
      .post(
        `http://${ip}:8080/avaliar`,
        {
          nome: `${nome}`,
          nota: `${nota}`,
          nomeFilme: `${filme?.title}`,
          idFilme: `${idFilme}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

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
            {/* <Avaliacao /> */}
            <NumericInput
              type='up-down'
              value={nota}
              onChange={(nota) => setNota(nota)}
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={120}
              totalHeight={50}
              minValue={1}
              maxValue={10}
              valueType='real'
              iconStyle={{ alignContent: 'flex-start' }}
              textColor='#fff'
              borderColor='transparent'
              upDownButtonsBackgroundColor='#444'
            />
            <TouchableOpacity onPress={() => enviarAvaliacao()}>
              <Text style={{ color: "white", marginTop: 20, marginBottom: 50 }}>
                ENVIAR AVALIAÇÃO
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <StatusBar hidden />
        </>
      )}
    </View>
  );
};
