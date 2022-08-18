import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "../../../assets/icon.png";
import styles from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackList } from "../../rotas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { api2 } from "../../services/api";

type LoginProps = NativeStackScreenProps<StackList, "Login">;
interface Login {
  email: string;
  senha: string;
}
export const Login = ({ navigation }: LoginProps) => {
  const [token, setToken] = useState("");
  const [login, setLogin] = useState<Login>({ email: "", senha: "" });

  useEffect(() => {
    getData();
  }, []);

  function logar() {
    var config = {
      method: "post",
      url: `${api2}login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: login,
    };

    axios(config)
      .then(function (response) {
        AsyncStorage.setItem("token", JSON.stringify(response.data));
        navigation.navigate("DrawerTelaInicial");
      })
      .catch(function (error) {
        console.log(error);
        alert("Revise seus dados!");
      });
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        navigation.navigate("DrawerTelaInicial");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.fundoTela}>
      <Image source={Icon} style={styles.estiloIcon} />
      <Text style={styles.bemVindo}>Bem vindo !</Text>
      <TextInput
        style={styles.inputNome}
        value={login?.email}
        onChangeText={(text) => setLogin({ ...login, email: text })}
        placeholder={"Email"}
        placeholderTextColor={"#474747"}
      />
      <TextInput
        secureTextEntry={true}
        textContentType={"password"}
        style={styles.inputNome}
        value={login?.senha}
        onChangeText={(text) => setLogin({ ...login, senha: text })}
        placeholder={"Senha"}
        placeholderTextColor={"#474747"}
      />
      <TouchableOpacity onPress={() => logar()}>
        <View style={styles.botaoEntrar}>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
