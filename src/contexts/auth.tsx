import React, { createContext, useState } from "react";

export interface TipoAuthContext {
    nome: string
    setNome: (nome:string) => void
}

export const AuthContext = createContext<TipoAuthContext>({
    nome: "",
    setNome: (nome:string) => {} 
})

export const AuthProvider = ({ children }:any) => {

    const [nome, setNome] = useState<string>("");

    return (
        <AuthContext.Provider
            value={{
                nome,
                setNome
            }}>
            {children}
        </AuthContext.Provider>
    )
}