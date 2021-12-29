import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, ImageBackground,Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { Modal } from 'react-native';






const Login = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [modalVisible2, setModalVisible2] = useState(true);

  const [modalnumber, setModalnumber] = useState(0);


  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
        
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>


{/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.login2}>
        <View style={styles.logo2cover}>
              <Image
                      style={styles.logo1}

               source={require('../../../assets/images/Vectormenu.jpg')}
              /> 
            </View>

            <View style={styles.modalText}>

        <Text 
        // style={styles.textStyle}
        >Menu</Text>


        <Text>good</Text>

            </View>
        <View style={styles.modalbutton}>
        <Pressable
          // style={[styles.buttonmodal, styles.buttonOpen]}
          onPress={() => setModalVisible(false)}
        ><Text>skip</Text></Pressable>
         <Pressable
          style={[styles.buttonmodal, styles.buttonOpen]}
          onPress={() =>
            {
              setModalnumber(2) 
              // setModalVisible(false)
            } }
        ><Text>got It</Text></Pressable>
        </View>
       

        </View>
      </Modal> */}
{/* 
      {modalnumber === 2 && <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {console.log(styles.login2)}
        {console.log(styles.logo2cover)}

        <View style={styles.login2}>
        <View style={styles.logo2cover}>
            <Image
          style={styles.logo1}
          source={require('../../../assets/images/Vectorsearch.jpg')}
        /> 
            </View>
        <Text style={styles.textStyle}>Search</Text>
        <View style={styles.modalbutton}>
         <Pressable
          style={[styles.buttonmodal, styles.buttonOpen]}
          onPress={() => setModalVisible(false)}
          ><Text>skip2</Text></Pressable>
           <Pressable
          style={[styles.buttonmodal, styles.buttonOpen]}
          onPress={() =>
            {
              setModalnumber(3) 
              // setModalVisible(false)
            } }
        ><Text>got It2</Text></Pressable>
        </View>
       

        </View>
      </Modal>}

      {modalnumber === 3 && <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.login2}>
        <View style={styles.logo2cover}>
            <Image
          style={styles.logo1}
          source={require('../../../assets/images/Vectormessage.jpg')}
        /> 
            </View>
        <Text style={styles.textStyle}>Search</Text>
        <View style={styles.modalbutton}>
         <Pressable
          style={[styles.buttonmodal, styles.buttonOpen]}
          onPress={() => setModalVisible(false)}
          ><Text>skip2</Text></Pressable>
           <Pressable
          style={[styles.buttonmodal, styles.buttonOpen]}
          onPress={() =>
            {
              setModalnumber(4) 
              // setModalVisible(false)
            } }
        ><Text>got It</Text></Pressable>
        </View>
       

        </View>
      </Modal>} */}

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
              onPress={() => navigation.navigate('HomeTab')}>
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


{/* <View style={styles.login2}>
            <View style={styles.logo2cover}>
            <Image
             style={styles.logo1}
             source={require('../../../assets/images/Vector.jpg')}
             />
            </View>
          
            <Text style = {styles.modalheading}>Notifications</Text>
            <Text>Get the Lastest Update</Text>
        </View> */}
