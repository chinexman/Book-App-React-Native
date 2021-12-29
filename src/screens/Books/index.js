import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import Library from '../../../assets/data/Library';
import Book from '../../components/Book.js/index.js';
import styles from './styles';
import Modaltour from './Modal';
import Tooltip from 'rn-tooltip';
// import Icon from 'react-native-ionicons/AntDesign';

const Library1 = Library[0];

// const tour = () => {

//   const [toolTipVisible, settoolTipVisible]=useState(true)
//   return(

//     // Alert.alert('ths is the tour', 'this is the home page', [
//       //   {
//         //     text: 'Skip',
//         //     onPress: () => console.log('Cancel Pressed'),
//         //     style: 'cancel',
//         //   },
//         //   {text: 'GOT it', onPress: () => console.log('OK Pressed')},
//         // ]);

//   //       <Tooltip
//   //       isVisible={toolTipVisible}
//   //       content={<Text>Check this out!</Text>}
//   //       placement="top"
//   //       onClose={() => settoolTipVisible(!toolTipVisible)}>
//   //   <TouchableHighlight style={styles.touchable}>
//   //     <Text>Press me</Text>
//   //   </TouchableHighlight>
//   // </Tooltip>
//       )
// };
const Books = () => {
  
  return (
    <React.Fragment>
   
<Modaltour />

      <View style={styles.container}>
        <FlatList
          data={Library}
          renderItem={({item}) => <Book book={item} />}
          numColumns={2}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />
      </View>
    </React.Fragment>
  );
};

export default Books;
