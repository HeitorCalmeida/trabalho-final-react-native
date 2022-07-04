import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import styles from "./style";
import { View } from 'react-native';

interface CardPair {
    image: string,
    desc: string,
}


export const CardInicial = () => {

    const [CardList, setCardList] = useState<CardList[]>([
        //Puxar data da API
    ])

    return (
        <FlatList
            numColumns={2}
            data={CardList}
            renderItem={({ item }) => {
                return (
                    <ScrollView contentContainerStyle={{ width: "50%" }} style={[{ flexDirection: "row" }]}>
                        <TouchableOpacity style={[styles.division, {}]}>
                            <Image style={styles.image} source={{ uri: item.image }} />
                            <View style={styles.division}>
                                <Text style={styles.desc}>{item.desc}</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                )
            }}
        />

    );
};