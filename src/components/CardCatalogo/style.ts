import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        textAlign: "left",
    },
    title: {
        color: "#fff",
        fontSize: 18,
        textAlign: "left",
        fontWeight: "bold",
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
    },
    cardAlign: {
        flexDirection: "row",
        alignContent: "flex-start",
        alignSelf: "flex-start",
        borderTopWidth: 1,
        borderTopColor: "#333",
        paddingTop: 10,
    },
    star: {
        marginRight: 5,
        width: 14,
        height: 14,
    },
});

export default styles