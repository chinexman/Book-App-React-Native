import React, {useState,createRef,useEffect} from 'react';
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
import * as Animatable from 'react-native-animatable';

import Loader from '../../components/Loader';

 


const Register = (props) => {
  const navigation = useNavigation();

  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [data, setData] = useState({
    isValidUsername: true,
    isValidEmail: true,
    isValidPassword: true,
});


 


  const userNameInputRef = createRef();
  const emailInputRef = createRef();
  const passwordInputRef = createRef();

console.log("username" ,data.isValidUsername);
  const handleUsernameChange = (val) => {
    console.log("username", val.trim().length)
    if( val.trim().length >= 4 ) {
        setData({
          
            // userName: val,
            isValidUsername: true
        });
    } else {
        setData({
            // userName: val,
          isValidUsername: false
        });
    }
}

console.log("email" ,data.isValidEmail);

const handleEmailChange = (val) => {
  console.log("email", val.trim().length)

  if( val.trim().length >= 8 ) {
      setData({
        
          // email: val,
          isValidEmail: true
      });
  } else {
      setData({
          // email: val,
          isValidEmail: false
      });
  }
}
console.log("password" ,data.isValidPassword);

const handlePasswordChange = (val) => {
  console.log("password", val.trim().length)

  if( val.trim().length >= 8 ) {
      setData({
        
          // password: val,
          isValidPassword: true
      });
  } else {
      setData({
          // password: val,
          isValidPassword: false
      });
  }
}

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Username');
      return;
    }
    if (!email) {
      alert('Please fill Email');
      return;
    }
   
    if (!password) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: email,
      password: password,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    console.log(formBody);

    (() => navigation.navigate('Library'))();


  };
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
      
           {/* {data.isValidUsername ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            } */}

<TextInput
            style={styles.textInput}
            placeholder="username"
            ref={userNameInputRef}
            onChangeText={(username)=>setUsername(username)}
            // onEndEditing={(e)=>handleEmailChange(e.nativeEvent.text)}

            underlineColorAndroid={'transparent'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            ref={emailInputRef}
            onChangeText={(email)=>setEmail(email)}
            // onEndEditing={(e)=>handleEmailChange(e.nativeEvent.text)}

            underlineColorAndroid={'transparent'}
          />


           {/* { data.isValidEmail ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Email must be 8 characters long.</Text>
            </Animatable.View>
            } */}

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            ref={passwordInputRef}
            onChangeText={(password)=>setPassword(password)}
            // onEndEditing={(e)=>handlePasswordChange(e.nativeEvent.text)}

            underlineColorAndroid={'transparent'}
          />
           {/* {data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>password must be 8 characters long.</Text>
            </Animatable.View>
            } */}

          <View style={styles.buttoncontainer}>
            <Pressable
              style={styles.button}
              onPress={handleSubmitButton}>

              {/* onPress={() => navigation.navigate('SignupScreen')}> */}
                {/* onPress={() => navigation.navigate('HomeTab')}>  */}

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
