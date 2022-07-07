import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        textAlign: "left",
    },
    title: {
        color: "#fff",
        fontSize: 18,
        textAlign: "left",
        fontWeight: "bold",
        paddingTop: 10,
        width: 250,
    },
    text: {
        color: "#fff",
        alignItems: "flex-start",
        textAlign: "left",
        fontSize: 14,
        marginRight: 16,
    },
    texts: {
        color: "#fff",
        textAlign: "left",
        flexDirection: "row",
        marginVertical: 14,
    },
    cardText: {
        flexDirection: "column",
        marginHorizontal: 10,
    },
    poster: {
        width: 100,
        height: 150,
        marginHorizontal: 10,
    },
    cardAlign: {
        flexDirection: "row",
        alignContent: "flex-start",
        alignSelf: "flex-start",
        borderTopWidth: 1,
        borderTopColor: "#333",
        paddingVertical: 6,
    },
    star: {
        marginRight: 5,
        width: 14,
        height: 14,
    },
    header: {
        backgroundColor: "#303030",
        width: "100%",
        height: 50,
        flexDirection: "row",
    },
    buttonBack: {
        marginTop: 4,
        marginLeft: 5,
        width: 42,
        height: 42,
    },
    titulo: {
        color: "white",
        fontSize: 20,
        marginTop: 10,
        marginLeft: 15,
    },
});

export default styles;
