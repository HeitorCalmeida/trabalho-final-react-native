import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#121212',
  },
  poster:{
    marginVertical:25,
    borderRadius:7,
    borderWidth:12,
    borderColor:'#D9D9D9',
    width:200,
    height:280
  },
  header:{
    backgroundColor:'#303030',
    width:'100%',
    height:50,
    flexDirection:'row'
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
  sinopse:{
    margin:30,
    marginTop:8,
    marginBottom:18,
    color:'#fff',
    textAlign:'center'
  },
  duracao:{
    padding:3,
    backgroundColor:'#D9D9D9',
    borderRadius:3,
  },
  filmeinfo:{
    padding:5,
    marginTop:20,
    marginBottom:8,
    backgroundColor:'#21211F',
    width:'90%',
    borderRadius:10
  }
})