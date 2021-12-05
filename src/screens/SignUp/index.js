import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
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
        <View style={styles.register}>
          <TextInput
            style={styles.textInput}
            placeholder="username"
            value={username}
            onChangeText={setUsername}
            underlineColorAndroid={'transparent'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            underlineColorAndroid={'transparent'}
          />

          <View style={styles.buttoncontainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Library')}>
              <Text style={styles.title}>register</Text>
            </Pressable>

            <Pressable
              style={styles.login}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.title1}> Already have an account! Login</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
