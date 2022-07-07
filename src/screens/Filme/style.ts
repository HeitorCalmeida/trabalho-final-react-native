import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    poster: {
        marginVertical: 25,
        borderRadius: 7,
        width: 200,
        height: 293,
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#333',
        width: '100%',
        height: 54,
        flexDirection: 'row',
        paddingVertical: 2,
    },
    buttonBack: {
        marginTop: 4,
        marginLeft: 5,
        width: 42,
        height: 42,
    },
    titulo: {
        color: 'white',
        fontSize: 16,
        marginLeft: 15,
        width: 300,
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    sinopse: {
        marginTop: 4,
        marginBottom: 20,
        maxWidth: 350,
        color: '#fff',
        textAlign: 'left',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    duracao: {
        padding: 3,
        backgroundColor: '#D9D9D9',
        borderRadius: 3,
    },
    filmeinfo: {
        padding: 15,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 8,
        backgroundColor: '#21211F',
        width: '90%',
        borderRadius: 10
    },
    generoTexto: {
        textAlign: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        marginBottom: 3,
        fontSize: 12.5,
        paddingHorizontal: 12,
    },
    nota: {
        fontSize: 13,
        color: 'white'
    },
    notaImg: {
        width: 25,
        height: 25,
        marginTop: 10
    },
    notaQtd: {
        fontSize: 13,
        color: 'white',
        marginTop: 8
    },
    notaVotos: {
        fontSize: 9,
        color: 'white'
    },
    genero: {
        fontSize: 13,
        color: 'white',
    },
    aval: {
        color: "#fff",
        marginVertical: 16,
        fontSize: 16,
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
})
