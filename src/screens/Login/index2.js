import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, ImageBackground,Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';



const Modalpop = () => {
    return (
        <View style={styles.login2}>
            <View style={styles.logo2cover}>
            {/* <Image
          style={styles.logo1}
          source={require('../../../assets/images/Vector.jpg')}
        /> */}
            </View>
          
            <Text style = {styles.modalheading}>Notifications</Text>
            <Text>Get the Lastest Update</Text>
        </View>
    )
}

export default Modalpop
