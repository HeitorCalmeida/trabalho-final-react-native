import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Estrela from "../../assets/icons/star.png";
import starCheia from "../../assets/icons/starCheia.png";
import starVazia from "../../assets/icons/starVazia.png";
import Voltar from "../../assets/images/back.png";
import { AuthContext } from "../../contexts/auth";
import api, { api2 } from "../../services/api";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode, { JwtPayload } from "jwt-decode";
import {decode as atob, encode as btoa} from 'base-64';


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
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYWJlemsyIiwiZXhwIjoxNjU3NTI0Mzk3fQ.uNF11Z_nIv4gx8n_FiK69kWJ6mfFJ4vkwI9KvfJIiRLz9QY8OvAHA5CcA8ADIR9l0cRDkUhL-StG7U_iQZV1XQ'

export const Filme = (props: any) => {
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  //MUDE PARA SEU IPv4 - Use o comando "ipconfig" no terminal para visualizar seu IPv4 ex:000.000.0.000.
  const ip = "192.168.1.222";
  //MUDE PARA SEU IPv4

  const [tokenU, setTokenU] = useState('');
  const [userData, setUserData] = useState<JwtPayload>();
  const [filme, setFilme] = useState<Movies>();
  const nome = useContext(AuthContext).nome;
  const idFilme = props.route.params;

  useEffect(() => {
    getFilme();
    getTokenUser();
    
  }, []);

  const getFilme = async () => {
    const response = await api.get(`movie/${idFilme}?${apiKey}&${language}`);
    setFilme(response.data);
  };

  const getTokenUser = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        setTokenU(JSON.parse(value));
        setUserData(jwtDecode<JwtPayload>(JSON.parse(value)));
        // var teste = JSON.parse(atob(tokenU.split('.')[1])).sub.split('-')[0]

      }
    } catch(e) {
      console.log(e)
    }
  }

  function enviarAvaliacao() {
    axios
      .post(
        `${api2}api/avaliar`,
        {
          nota: `${defaultRating}`,
          nomeFilme: `${filme?.title}`,
          idFilme: `${idFilme}`,
          usuario: {id: `${userData?.sub?.split('-')[0]}`}
        },
        {
          headers: {
            "Authorization":`Bearer ${token}`,
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
      {/* {console.log(userData)} */}
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
            <View style={styles.customRatingBarStyle}>
              {maxRating.map((item, key) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={item}
                    onPress={() => setDefaultRating(item)}
                  >
                    <Image
                      style={styles.starImgStyle}
                      source={item <= defaultRating ? starCheia : starVazia}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text style={styles.textStyle}>{defaultRating}</Text>
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
