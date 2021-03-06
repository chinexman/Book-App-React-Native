import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import styles from './styles';
 import IonMenu from 'react-native-vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/Entypo'
import IonSearch from 'react-native-vector-icons/FontAwesome'
import IonMessage from 'react-native-vector-icons/Feather'
import IonNotification from 'react-native-vector-icons/Feather'
import IonOpportunities from 'react-native-vector-icons/FontAwesome'
import IonAdd from 'react-native-vector-icons/Ionicons'
import IonSavings from 'react-native-vector-icons/Fontisto'



const Modaltour = () => {
const [modalVisible, setModalVisible] = useState(true);
const [modalnumber, setModalnumber] = useState(0);


    return (
        <View>
               <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.login2}>
          <View style={{
               marginLeft :'5%',
               marginTop:5,
          }}>

          <Ionicons 
          name="arrow-bold-up"
          size={20}
          />

          </View>
          <View style={styles.imageheading}>
            <View style={styles.logo1cover}>
             
               <IonMenu
          name="menu"
          size={20}
          />
            </View>
            <Text style={styles.imageheadingtext}> Menu</Text>
          </View>

          <View style={styles.modalText}>
            <Text style={styles.modaltextStyle2}>
              Tap here to see menu features
            </Text>
          </View>
          <View style={styles.modalbutton}>
           
            <Pressable
              style={styles.buttonskip}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonskipText}>Skip</Text>
            </Pressable>
            <Pressable
              style={styles.buttonGotIt}
              onPress={() => {
                setModalnumber(2);
                // setModalVisible(false)
              }}>
              <Text style={styles.buttonGotItText}>Got It</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {modalnumber === 2 && (
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.login2}>
        <View style={{
               marginLeft :'83%',
               marginTop:5,
          }}>

          <Ionicons 
          name="arrow-bold-up"
          size={20}
          />

          </View>
          <View style={styles.imageheading}>
            <View style={styles.logo1cover}>
            <IonSearch
          name="search"
          size={15}
          />
            </View>
            <Text style={styles.imageheadingtext}> Search</Text>
          </View>

          <View style={styles.modalText}>
            <Text style={styles.modaltextStyle2}>
            Tap here to search for contacts
            </Text>
          </View>
          <View style={styles.modalbutton}>
            
            <Pressable
              style={styles.buttonskip}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonskipText}>Skip</Text>
            </Pressable>
            <Pressable
              style={styles.buttonGotIt}
              onPress={() => {
                setModalnumber(3);
                // setModalVisible(false)
              }}>
              <Text style={styles.buttonGotItText}>Got It</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      )}
      {modalnumber === 3 && (
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.login2}>
        <View style={{
               marginLeft :'90%',
               marginTop:5,
          }}>

          <Ionicons 
          name="arrow-bold-up"
          size={20}
          />

          </View>
          <View style={styles.imageheading}>
            <View style={styles.logo1cover}>
            <IonMessage
          name="send"
          size={14}
          />
            </View>
            <Text style={styles.imageheadingtext}> Message</Text>
          </View>

          <View style={styles.modalText}>
            <Text style={styles.modaltextStyle2}>
            Tap here to make a post
            </Text>
          </View>
          <View style={styles.modalbutton}>
           
            <Pressable
              style={styles.buttonskip}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonskipText}>Skip</Text>
            </Pressable>
            <Pressable
              style={styles.buttonGotIt}
              onPress={() => {
                setModalnumber(4);
                // setModalVisible(false)
              }}>
              <Text style={styles.buttonGotItText}>Got It</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      )}
      {modalnumber === 4 && (
       <Modal
       animationType="fade"
       transparent={true}
       visible={modalVisible}
       onRequestClose={() => {
         setModalVisible(!modalVisible);
       }}>
       <View style={styles.login2}>
         <View style={styles.direction}></View>
         <View style={styles.imageheading}>
           <View style={styles.logo1cover}>
           <IonNotification
          name="bell"
          size={15}
          />
           </View>
           <Text style={styles.imageheadingtext}> Notifications</Text>
         </View>

         <View style={styles.modalText}>
           <Text style={styles.modaltextStyle2}>
           Tap here to get latest updates
           </Text>
         </View>
         <View style={styles.modalbutton}>
          
           <Pressable
             style={styles.buttonskip}
             onPress={() => setModalVisible(false)}>
             <Text style={styles.buttonskipText}>Skip</Text>
           </Pressable>
           <Pressable
             style={styles.buttonGotIt}
             onPress={() => {
               setModalnumber(5);
               // setModalVisible(false)
             }}>
             <Text style={styles.buttonGotItText}>Got It</Text>
           </Pressable>
         </View>
         <View style={{
               marginLeft :'90%',
               marginTop:5,
          }}>

          <Ionicons 
          name="arrow-bold-down"
          size={20}
          />

          </View>
       </View>
     </Modal>
      )}
      {modalnumber === 5 && (
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.login2}>
          <View style={styles.direction}></View>
          <View style={styles.imageheading}>
            <View style={styles.logo1cover}>
            <IonOpportunities
          name="shopping-bag"
          size={14}
          />
              
            </View>
            <Text style={styles.imageheadingtext}> Opportunities</Text>
          </View>

          <View style={styles.modalText}>
            <Text style={styles.modaltextStyle2}>
            Tap here to explore our goodies
            </Text>
          </View>
          <View style={styles.modalbutton}>
            
            <Pressable
              style={styles.buttonskip}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonskipText}>Skip</Text>
            </Pressable>
            <Pressable
              style={styles.buttonGotIt}
              onPress={() => {
                setModalnumber(6);
                // setModalVisible(false)
              }}>
              <Text style={styles.buttonGotItText}>Got It</Text>
            </Pressable>
          </View>
          <View style={{
               marginLeft :'70%',
               marginTop:5,
          }}>

          <Ionicons 
          name="arrow-bold-down"
          size={20}
          />

          </View>
        </View>
      </Modal>
      )}
       {modalnumber === 6 && (
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.login2}>
          <View style={styles.direction}></View>
          <View style={styles.imageheading}>
            <View style={styles.logo1cover}>
            <IonAdd
          name="add-circle-outline"
          size={15}
          />
            </View>
            <Text style={styles.imageheadingtext}> Add</Text>
          </View>

          <View style={styles.modalText}>
            <Text style={styles.modaltextStyle2}>
              Tap here to make a post
            </Text>
          </View>
          <View style={styles.modalbutton}>
            
            <Pressable
              style={styles.buttonskip}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonskipText}>Skip</Text>
            </Pressable>
            <Pressable
              style={styles.buttonGotIt}
              onPress={() => {
                setModalnumber(7);
                // setModalVisible(false)
              }}>
              <Text style={styles.buttonGotItText}>Got It</Text>
            </Pressable>
          </View>
          <View style={{
               marginLeft :'47%',
               marginTop:10,
          }}>

          <Ionicons 
          name="arrow-bold-down"
          size={20}
          />

          </View>
        </View>
      </Modal>
      )}
      {modalnumber === 7 && (
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.login2}>
          <View style={styles.direction}></View>
          <View style={styles.imageheading}>
            <View style={styles.logo1cover}>
            <IonSavings
          name="wallet"
          size={14}
          />
            </View>
            <Text style={styles.imageheadingtext}> Savings</Text>
          </View>

          <View style={styles.modalText}>
            <Text style={styles.modaltextStyle2}>
              Tap here to save to Wallet
            </Text>
          </View>
          <View style={styles.modalbutton}>
            
            <Pressable
              style={styles.buttonskip}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonskipText}>Skip</Text>
            </Pressable>
            <Pressable
              style={styles.buttonGotIt}
              onPress={() => {
                setModalnumber(8);
                // setModalVisible(false)
              }}>
              <Text style={styles.buttonGotItText}>Got It</Text>
            </Pressable>
          </View>
          <View style={{
               marginLeft :'25%',
               marginTop:10,
          }}>

          <Ionicons 
          name="arrow-bold-down"
          size={20}
          />

          </View>
        </View>
      </Modal>
      )}
     
        </View>
    )
}

export default Modaltour
