import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Modal} from 'react-native';

const Login = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [modalVisible2, setModalVisible2] = useState(true);

  const [modalnumber, setModalnumber] = useState(0);

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedValue1, setSelectedValue1] = useState("java");
  const [selectedValue2, setSelectedValue2] = useState("java");
  const [selectedValue3, setSelectedValue3] = useState("java");



  return (
    <View style={styles.container}>
      <View style={styles.frequencyheading}>
        
        
        <Text style={styles.frequencyheadingtext}>
          Select Preferred time
        </Text>
        <View style={styles.pickerinput}>
       <Picker
        selectedValue={selectedValue1}
        style={{ height: 50, width: 150 }}
        mode={'dropdown'}

        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
      >
        <Picker.Item label="04:00 am" value="04:00 am" />
        <Picker.Item label="05:00 am" value="05:00 am" />
        <Picker.Item label="06:00 am" value="06:00 am" />
        <Picker.Item label="07:00 am" value="07:00 am"/>
        <Picker.Item label="08:00 am" value="08:00 am"/>



      </Picker> 
    </View>
    <Text style={styles.frequencyheadingtext}>
          Where would you want to fund your saving?
        </Text>

    <View style={styles.pickerinput}>
       <Picker
        selectedValue={selectedValue2}
        style={{ height: 50, width: 150 }}
        mode={'dropdown'}

        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
      >
        <Picker.Item label="My wallets" value="wallets" />
        <Picker.Item label="direct Bank transfer" value="Bank" />
        <Picker.Item label="Herconomy Card" value="Herconomy Card" />
        <Picker.Item label="Debit Card" value="Card"/>



      </Picker> 
    </View>
    <Text style={styles.frequencyheadingtext}>
          When do you want to start?
        </Text>

        <View style={styles.pickerinput}>
       <Picker
        selectedValue={selectedValue3}
        style={{ height: 50, width: 150 }}
        mode={'dropdown'}

        onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
      >
        <Picker.Item label="Now" value="Now" />
        <Picker.Item label="tommorow" value="tommorow" />



      </Picker> 
    </View>

      
        <Pressable style={styles.buttonnext}>
                <Text style={styles.buttonnexttext}>Next</Text>
            </Pressable>


        <View style={styles.buttomfrequency}>
                <View style={styles.innerbuttom}></View>
            </View>
      </View>

      {/* <Text style={styles.bodytext}>Earn of to 10% per annum</Text>
            <Pressable style={styles.buttonstrict}>
                <Text style={styles.buttonstricttext}>Start Saving</Text>
            </Pressable>

            <View style={styles.buttom}>
                <View style={styles.innerbuttom}></View>
            </View> 
            */}
    </View>
  );
};

export default Login;

{
  /* <View style={styles.login2}>
            <View style={styles.logo2cover}>
            <Image
             style={styles.logo1}
             source={require('../../../assets/images/Vector.jpg')}
             />
            </View>
          
            <Text style = {styles.modalheading}>Notifications</Text>
            <Text>Get the Lastest Update</Text>
        </View> */
}
