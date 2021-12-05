import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, ImageBackground,Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/booklogo.jpg')}
        />
        <View style={styles.login}>
          <TextInput
            style={styles.textInput}
            placeholder="email"
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            underlineColorAndroid={'transparent'}
          />
          <View style={styles.buttoncontainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Library')}>
              <Text style={styles.title}>login</Text>
            </Pressable>

            <Pressable
              style={styles.register}
              onPress={() => navigation.navigate('Sign UP')}>
              <Text style={styles.title1}> don't have an account! Sign UP</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
