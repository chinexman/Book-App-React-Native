import React, {useState} from 'react'
import { 
    View,
    Text,
    TextInput,
    Pressable,
    ImageBackground, 
} from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (<View>


<ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <View style={styles.register}>
            <TextInput style={styles.textInput} placeholder="username"
            value={username} 
            onChangeText={setUsername}
            underlineColorAndroid={'transparent'}/>
           
           
           <TextInput style={styles.textInput} placeholder="email" 
           value={email} 
           onChangeText={setEmail}
            underlineColorAndroid={'transparent'}/> 
            <TextInput style={styles.textInput} placeholder="password" 
            value={password} 
            onChangeText={setPassword}
            underlineColorAndroid={'transparent'}/>
            <Pressable
            style={styles.button}
            onPress ={()=>navigation.navigate('Library')}
            >
                <Text style={styles.title}>register</Text>
            </Pressable>

</View>
</ImageBackground>

        </View>
    )
}

export default Register
