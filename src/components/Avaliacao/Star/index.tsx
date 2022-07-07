import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Estrela from "../../../assets/icons/star.png";
import EstrelaVazia from "../../../assets/icons/starVoid.png";
import styles from "../style";


// export const Star = () => {
//     const [defaultRating, setDefaultRating] = useState(2)
//     const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

//     const starImgFilled = Estrela
//     const starImgCorner = EstrelaVazia

//     const CustomRatingBar = () => {
//         return (
//             <View style={styles.container}>
//                 {
//                     maxRating.map((item, key) => {
//                         return (
//                             <TouchableOpacity
//                                 activeOpacity={0.7}
//                                 key={item}
//                                 onPress={() => setDefaultRating(item)}
//                             >
//                                 <Image
//                                     style={styles.size}
//                                     source={
//                                         item <= defaultRating
//                                             ? { uri: starImgFilled }
//                                             : { uri: starImgCorner }
//                                     }
//                                 />
//                             </TouchableOpacity>
//                         )
//                     }
//                     )
//                 }
//             </View>
//         )
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <CustomRatingBar />
//         </SafeAreaView>
//     )
// }