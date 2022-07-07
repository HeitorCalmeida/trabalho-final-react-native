import React, { createContext, useState } from "react";

export interface TipoAuthContext {
    nome: string
}

export const AuthContext = createContext<TipoAuthContext>({
    nome: ""
})

export const AuthProvider = ({ children }) => {
    const [nome, setNome] = useState<string>("");

    return (
        <AuthContext.Provider
            value={{
                nome
            }}>
            {children}
        </AuthContext.Provider>
    )
}