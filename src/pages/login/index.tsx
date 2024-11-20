// https://www.youtube.com/watch?v=A5yIPclvjJk&list=PLN5FV-HmjCA8UKWLep7O31PtQYqML8-Wd&ab_channel=CaioeduardoDev
import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { style } from './styles';
import Logo from '../../assets/logop.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../../../global/themes';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        setLoading(false);
        return Alert.alert('Atenção', 'Campos obrigatórios');
      }  

      setTimeout(() => {
        try {
          if (email === 'email@test.com' && password === '1234') {
            console.log('Logado com sucesso :D');
            Alert.alert('Logado com sucesso :D');
          } else {
            Alert.alert('Atenção', 'Usuário não encontrado');
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <MaterialIcons 
          name='air'
          size={20}
          color={themas.Colors.gray}
        />
        <Image 
          source={Logo} 
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Digite seu email</Text>
        <View style={style.boxInput}>
          <TextInput 
            style={style.input}
            value={email}
            onChangeText={setEmail}
          />
          <MaterialIcons 
            name="email"
            size={20}
            color={themas.Colors.gray}
          />
        </View>
        <Text style={style.titleInput}>Informe sua senha</Text>
        <View style={style.boxInput}>
          <TextInput 
            style={style.input}
            value={password}
            onChangeText={setPassword}
          />
          <MaterialIcons 
            name="remove-red-eye"
            size={20}
            color={themas.Colors.gray}
          />
        </View>
        <Text>Esqueceu a senha?</Text> 
      </View>
      <View style={style.boxBottom}>
        <View>
          <TouchableOpacity style={style.button} onPress={getLogin}>
            {loading ? (
              <ActivityIndicator color='#FFFF' size='small' />
            ) : (
              <Text style={style.textButton}>Entrar</Text>
            )}
          </TouchableOpacity>
        </View>
        <Text style={style.textBottom}>
          Não tem conta? <Text style={style.textBottomCreate}>Crie agora</Text>
        </Text>
      </View>
    </View>
  );
}
