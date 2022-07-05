import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PagInicial } from "../screens/PagInicial";
import { NavigationContainer } from "@react-navigation/native";
import { Catalogo } from "../screens/Catalogo";

const Stack = createNativeStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Catalogo"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Inicial" component={PagInicial} />
        <Stack.Screen name="Catalogo" component={Catalogo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
