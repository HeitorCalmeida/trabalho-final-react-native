import React, { useEffect, useState } from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Catalogo} from "../screens/Catalogo";
import {Login} from "../screens/Login";
import {Filme} from "../screens/Filme";
import {EmBreve} from "../screens/EmBreve";
import {TelaInicial} from "../screens/TelaInicial";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator<DrawerList>();

export type DrawerList = {
    Catalogo: undefined;
    TelaInicial: undefined;
    EmBreve: undefined;
}



function MyDrawer() {
  return (
    <Drawer.Navigator 
    initialRouteName="TelaInicial" 
    useLegacyImplementation = {true}
    screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#222',
        drawerActiveTintColor: '#006C96',
        drawerInactiveTintColor: '#444',
        drawerStyle: {
            backgroundColor: '#111',
        }

    }}>
      <Drawer.Screen name="Tela inicial" component={TelaInicial} />
      <Drawer.Screen name="Perfil" component={EmBreve} />
      <Drawer.Screen name="Configuração" component={EmBreve} />
      <Drawer.Screen name="Suporte" component={EmBreve} />
    </Drawer.Navigator>
  );
}
const Stack = createNativeStackNavigator<StackList>();

export type StackList = {
    DrawerTelaInicial: undefined;
    Login: undefined;
    Filme: undefined;
    Catalogo: undefined;
    EmBreve: undefined;
}

export const Rotas = (navigation:any) => {

    const [rota,setRota] = useState<any>("Login");

    useEffect(() => {
        const getData = async () => {
            try {
              const value = await AsyncStorage.getItem('@storage_Key')
              if(value !== null) {
                console.log(`VALOR DO ASSYNC ${value}`)
                setRota("DrawerTelaInicial")
              }
            } catch(e) {
              console.log(e)
            }
          }
        getData();
      }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={rota}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="DrawerTelaInicial" component={MyDrawer}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Filme" component={Filme}/>
                <Stack.Screen name="Catalogo" component={Catalogo}/>
                <Stack.Screen name="EmBreve" component={EmBreve}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

