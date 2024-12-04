import React  from 'react';
import { Text, TextInput, View, ScrollView, SafeAreaView, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from './styles';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../../global/themes';
import { NavTop } from '../../components/NavTop';
import Logo from '../../assets/logop.png';
import { CardEduc } from '../../components/CardEduc';


export default function Educ() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}> 
        <NavTop 
          logo={Logo} 
          iconName='air'
        />
      </View>
      <Text style={style.textScreen}> Educação </Text>
      <Text> 
        Tela Educacao 
      </Text>
      <SafeAreaView style={style.safeArea}>
        <ScrollView contentContainerStyle={style.scrollView}>
          <View style={style.cardsContainer}>
            <CardEduc 
              title="Card 1" 
              description="Descrição do Card 1" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://google.com" 
            />
            <CardEduc 
              title="Card 2" 
              description="Descrição do Card 2" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://google.com"  
            />
            <CardEduc 
              title="Card 3" 
              description="Descrição do Card 3" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://google.com"  
            />
            <CardEduc 
              title="Card 4" 
              description="Descrição do Card 4" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://google.com" 
            />
            <CardEduc 
              title="Card 5" 
              description="Descrição do Card 5" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://google.com"  
            />
            <CardEduc 
              title="Card 6" 
              description="Descrição do Card 6" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://google.com"  
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
