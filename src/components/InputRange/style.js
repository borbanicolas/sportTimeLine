import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window')
const WIDTH = width - 80;

export const styles = StyleSheet.create({
    container:{
        marginHorizontal:40,
        justifyContent:'center',
    },
    rail:{
        backgroundColor:'#B9BED1',
        position: 'absolute',
        marginTop: 30,
        height: 6,
        borderRadius: 6,
        width: WIDTH,
     
    },
    exercice:{
        marginTop: 10,
        textAlign:'right'
    },
    timeranges:{
        textAlign:'center',
    },
    knob:{
        height: 20,
        width: 20,
        borderRadius:10,
        backgroundColor:'#fff',
        position: "absolute",
        elevation:5,
        
    }
});