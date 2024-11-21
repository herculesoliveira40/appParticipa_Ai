import React from "react";
import {  TouchableHighlightProps, TouchableOpacity, Text, View} from "react-native";
import { style } from './styles';
import { AntDesign, MaterialIcons, Octicons } from '@expo/vector-icons';
import { themas } from '../../../global/themes';


export default ({ state, navigation }: any)=>{ 
    const go=((screenName:string)=>{
        navigation.navigate(screenName);
    })
    return (
       <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>go('Login')}>
                <AntDesign
                    name="bars"
                    style={{opacity:state.index===0?1:0.5,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>                
            <TouchableOpacity style={style.tabItem} onPress={()=>go('Dashboard')}>
                <AntDesign
                    name="bars"
                    style={{opacity:state.index===1?1:0.5,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>                
            <TouchableOpacity style={style.tabItem} onPress={()=>go('Educ')}>
                <AntDesign
                    name="bars"
                    style={{opacity:state.index===2?1:0.5,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>                
            <TouchableOpacity style={style.tabItem} onPress={()=>go('User')}>
                <AntDesign
                    name="bars"
                    style={{opacity:state.index===3?1:0.5,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>                
                          
       </View>        
    );
}


//40 https://www.youtube.com/watch?v=1iYA1Qf_2UI&list=PLN5FV-HmjCA8UKWLep7O31PtQYqML8-Wd&index=2&ab_channel=CaioeduardoDev 