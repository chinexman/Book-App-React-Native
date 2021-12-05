import React,{useState} from 'react'
import { 
    View,
    Text,
    TextInput,
    Pressable,
    ImageBackground, 
} from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View>
<ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
      
        <View style={styles.login}>
       <TextInput style={styles.textInput} placeholder="email" 
        underlineColorAndroid={'transparent'}/> 
        <TextInput style={styles.textInput} placeholder="password" 
        underlineColorAndroid={'transparent'}/>
         <Pressable
            style={styles.button}
            onPress ={()=>navigation.navigate('Library')}
            >
                <Text style={styles.title}>login</Text>
            </Pressable>

        </View>
        </ImageBackground>
    </View>
    )
}

export default Login
