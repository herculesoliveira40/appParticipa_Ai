import React  from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../../global/themes';
import { style } from './styles';
import { NavTop } from '../../components/NavTop';
import Logo from '../../assets/logop.png';

export default function Dashboard() {
    return (
      
        <View style={style.container}>
            <View style={style.boxTop}> 
                <NavTop 
                    logo={Logo} 
                    iconName='air'
                />
            </View>
              <Text> 
              Tela Dashboard 
             </Text>
        </View>
 
     )
 }    