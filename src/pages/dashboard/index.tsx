import React  from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../../global/themes';


export default function Dashboard() {
    return (
       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
             <Text> 
                Tela Dashboard 
            </Text>
       </View>

    )
}    