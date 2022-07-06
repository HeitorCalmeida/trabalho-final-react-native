import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './src/contexts/auth';
import { Rotas } from './src/rotas';

export default function App() {
    return (
        <AuthProvider>
            <Rotas />
        </AuthProvider>
    )
}
