import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PagInicial } from "../screens/PagInicial";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicial"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Inicial" component={PagInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
