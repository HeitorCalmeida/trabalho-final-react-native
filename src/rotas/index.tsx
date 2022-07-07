import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Catalogo} from "../screens/Catalogo";
import {Login} from "../screens/Login";
import {Filme} from "../screens/Filme";
import {TelaInicial} from "../screens/TelaInicial";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator<DrawerList>();

export type DrawerList = {
    Catalogo: undefined;
    TelaInicial: undefined;
}

function MyDrawer() {
  return (
    <Drawer.Navigator 
    initialRouteName="TelaInicial" 
    useLegacyImplementation = {true}
    screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#fff'
    }}>
      <Drawer.Screen name="TelaInicial" component={TelaInicial} />
    </Drawer.Navigator>
  );
}
const Stack = createNativeStackNavigator<StackList>();

export type StackList = {
    DrawerTelaInicial: undefined;
    Login: undefined;
    Filme: undefined;
    Catalogo: undefined;
}

export const Rotas = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="DrawerTelaInicial" component={MyDrawer}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Filme" component={Filme}/>
                <Stack.Screen name="Catalogo" component={Catalogo}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

