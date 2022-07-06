import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    fundoTela: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: "center"
    },
    estiloIcon: {
        width: "55%",
        height: "20%",
        marginTop: 80
    },
    bemVindo: {
        color: '#fff',
        fontSize: 18,
        paddingTop: 60
    },
    inputNome: {
        marginTop: 40,
        padding: 5,
        backgroundColor: '#303030',
        borderRadius: 5,
        width: 330,
        color: '#fff',
        fontSize: 18
    },
    botaoEntrar: {
        backgroundColor: '#006C96',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 30
    },
    textoEntrar: {
        fontSize: 22,
        color: '#000',
        fontWeight: "600"
    }
})

export default styles
