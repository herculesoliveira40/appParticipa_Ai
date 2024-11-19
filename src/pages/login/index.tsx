// https://www.youtube.com/watch?v=A5yIPclvjJk&list=PLN5FV-HmjCA8UKWLep7O31PtQYqML8-Wd&ab_channel=CaioeduardoDev
import React, { useState } from 'react';

import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';

import { style } from './styles';
import Logo from '../../assets/logop.png';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../../global/themes';
export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('*****');
  const [loading, setLoading] = useState(false);


  async function getLogin() {
    try {
          setLoading(true);

          if (!email || !senha) {
            return Alert.alert('Atencao', ' Campos obrigatorios');
          }  
          
          setTimeout(()=> {
            if(email == 'email@test.com' && senha == '1234') {
            console.log('Logado com sucesso :D');
            Alert.alert('Logado com sucesso :D')
            } else {
              Alert.alert('Atencao', 'Usuario não encontrado');
            }
            setLoading(false);
          }, 3000)
         
      } catch (error) {
        console.log(error);
      } 
  }

  return (
    <View style={style.container}>
      <View style={style.boxNav}>
        <MaterialIcons 
                name='air'
                size={20}
                color={themas.colors.gray}
             //   justify-content='center'
        />
        <Image  
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
      </View>
      <View style={style.boxTop}>
          <Text style={style.titleInput}> Digite seu email </Text>
          <View style={style.boxInput}>
            <TextInput 
              style={style.input}
              value={email}
              onChangeText={setEmail}
            />
            <MaterialIcons
              name='email'
              size={20}
              color={themas.colors.gray}
            />
          </View>            
          <Text style={style.titleInput}> Informe sua senha </Text>
          <View style={style.boxInput}>
            <TextInput 
              style={style.input}
              value={senha}
              onChangeText={setSenha}
            />
            <MaterialIcons
              name='remove-red-eye'
              size={20}
              color={themas.colors.gray}
            />          
          </View>
          <Text > Esqueceu a senha? </Text>       
      </View>


      <View style={style.boxMid}>
        <View >
              <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                {
                  loading?
                    <ActivityIndicator color={'#FFFF'} size={"small"} />
                  :
                    <Text style={style.textButton}> Entrar </Text>
                }
              </TouchableOpacity>
          </View>
        <Text style={style.textBottom}> Não tem conta?  
            <Text style={{color:themas.colors.primary}}> Crie Agora  </Text>
        </Text>
      </View>
      

      <View style={style.boxBootom}>
        <MaterialIcons
                name='insights'
                size={20}
                color={themas.colors.gray}
        />
        <MaterialIcons
                name='content-paste'
                size={20}
                color={themas.colors.gray}
        />
        <MaterialIcons
                name='info-outline'
                size={20}
                color={themas.colors.gray}
        />
      </View>
    </View> 
  );
}


