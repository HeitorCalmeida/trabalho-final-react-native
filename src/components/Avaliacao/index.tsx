import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Estrela from "../../assets/icons/star.png";
import EstrelaVazia from "../../assets/icons/starVoid.png";
// import { Star } from "./Star";
import styles from "./style";


export const Avaliacao = () => {
    const [defaultRating, setDefaultRating] = useState(2)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

    const starImgfilled = Estrela
    const starImgCorner = EstrelaVazia

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {/* <Star />
                <Star />
                <Star />
                <Star />
                <Star /> */}
            </View>
            <TouchableOpacity
            // onPress={ }
            >
                <Text style={styles.text}>Avaliar</Text>
            </TouchableOpacity>
        </View>
    )
}