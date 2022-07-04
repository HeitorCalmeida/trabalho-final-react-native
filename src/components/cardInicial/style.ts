
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: "100%",
        padding: 4,
        maxHeight: 200,
        borderRadius: 12,
        marginLeft: 4,
        flexBasis: '96%',
    },
    division: {
        flexBasis: '50%',
        flexDirection: "row",
    },
    desc: {
        color: '#fff',
        marginHorizontal: 5,
        marginVertical: 5,
        textAlign: "left",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "flex-start",
    },
});

export default styles