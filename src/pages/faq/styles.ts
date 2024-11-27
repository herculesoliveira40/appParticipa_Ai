import {Dimensions, StyleSheet} from "react-native";
import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
        paddingTop: 80,
    },
    boxTop:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        // backgroundColor:'red',

    },
        textScreen:{
            fontSize: 28,
            color:themas.Colors.primaryText,
            fontWeight:'bold'
        },
});