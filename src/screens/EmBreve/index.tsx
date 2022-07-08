import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";


export const EmBreve = () => {
    return(
        <View style={styles.fundoDeTela}>
            <Text style={styles.text}>
                Em breve!
            </Text>
            <Image style={styles.gif} source={{uri: "https://c.tenor.com/2lFt6lp1KaMAAAAj/run-pokemon.gif"}}/>
        </View>
    )
}