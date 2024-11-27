import React  from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from './styles';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../../global/themes';
import { NavTop } from '../../components/NavTop';
import Logo from '../../assets/logop.png';


export default function Educ() {
    return (
      
        <View style={style.container}>
            <View style={style.boxTop}> 
                <NavTop 
                    logo={Logo} 
                    iconName='air'
                />
            </View>
            <Text style={ style.textScreen}> Educação </Text>
              <Text> 
                 Tela Educacao 
             </Text>
        </View>
 
     )
 }    