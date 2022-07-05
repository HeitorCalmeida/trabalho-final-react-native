import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    text: {
        color: "#fff",
    },
    header:{
        backgroundColor:'#303030',
        width:'100%',
        height:50,
        flexDirection:'row',
      },
      buttonBack:{
        marginTop:4,
        marginLeft:5,
        width:42,
        height:42,
      },
      titulo:{
        color:'white',
        fontSize:20,
        marginTop:10,
        marginLeft:15
      },
});

export default styles