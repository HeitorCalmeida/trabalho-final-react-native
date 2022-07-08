import React, { useContext, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "../../../assets/icon.png";
import { AuthContext } from "../../contexts/auth";
import styles from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackList } from "../../rotas";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginProps = NativeStackScreenProps<StackList, "Login">;

export const Login = ({ navigation }: LoginProps) => {

  const nome = useContext(AuthContext).nome;
  const setNome = useContext(AuthContext).setNome;

  const armazenar = async () => {
    try {
      await AsyncStorage.setItem("@storage_Key", nome);
      console.log(`${nome} coe`)
    } catch (e) { console.log(e) }
  };

  function entrar() {
    if (nome !== "") {
      armazenar()
      navigation.navigate("DrawerTelaInicial");
    }
  }

  return (
    <View style={styles.fundoTela}>
      <Image source={Icon} style={styles.estiloIcon} />
      <Text style={styles.bemVindo}>Bem vindo {nome}!</Text>

      <TextInput
        style={styles.inputNome}
        value={nome}
        onChangeText={(text) => setNome(text)}
        placeholder={"Digite seu nome"}
        placeholderTextColor={"#474747"}
      />

      <TouchableOpacity onPress={() => entrar()}>
        <View style={styles.botaoEntrar}>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
