import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './src/contexts/auth';
import { Rotas } from './src/rotas';
import 'react-native-gesture-handler';

export default function App() {
    return (
        <AuthProvider>
            <Rotas />
        </AuthProvider>
    )
}
