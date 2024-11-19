import {Dimensions, StyleSheet} from "react-native";
import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center"
    },
    boxNav: {
        backgroundColor: 'pink',
        alignItems: "flex-start",
      //  justifyContent: 'center',
        width: '100%',
        height: 200,
       // padding: 10,
    },
    boxTop: {
        backgroundColor: 'red',
        height: Dimensions.get('window').height/3,
        width: '100%', 
           
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textButton: {
        fontWeight: 'bold',
        color: themas.colors.secondary,
        fontSize: 28,
    
        
    },
    boxMid: {
        backgroundColor: 'green',
        height: Dimensions.get('window').height/5,
        width: '100%',    
        paddingHorizontal: 20,
    },
    boxBootom: {
        backgroundColor: 'blue',
        height: Dimensions.get('window').height/10,
        width: '100%',   
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {      
      //  height: 80,
        width: 200,    
    },
    text: {       
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 50,
    },
    titleInput: {
        marginLeft: 30,
        color: themas.colors.gray,
        marginTop: 20,
    }, 
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 40,
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: themas.colors.lighGray,
        borderColor: themas.colors.gray,
    },
    input: {
        height: '100%',
        width: '90%',
     //   backgroundColor: 'red',
        borderRadius: 40,
        paddingLeft: 10,
    },
    
    textBottom: {
        marginTop: 30,
        color: themas.colors.gray,
        fontSize: 14,
    }
        
})