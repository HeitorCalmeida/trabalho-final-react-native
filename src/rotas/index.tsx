import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Catalogo} from "../screens/Catalogo";
import {Login} from "../screens/Login";
import {Filme} from "../screens/Filme";
import {TelaInicial} from "../screens/TelaInicial";


const Stack = createNativeStackNavigator();

export const Rotas = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="TelaInicial" component={TelaInicial}/>
                <Stack.Screen name="Catalogo" component={Catalogo}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Filme" component={Filme}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
