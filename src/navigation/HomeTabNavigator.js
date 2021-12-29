import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Register from '../screens/SignUp';
import Books from '../screens/Books';

import Tooltip from 'react-native-walkthrough-tooltip';



const Tab = createBottomTabNavigator();

const tour = () => {

  const [toolTipVisible, settoolTipVisible]=useState(true)
  return(

    // Alert.alert('ths is the tour', 'this is the home page', [
      //   {
        //     text: 'Skip',
        //     onPress: () => console.log('Cancel Pressed'),
        //     style: 'cancel',
        //   },
        //   {text: 'GOT it', onPress: () => console.log('OK Pressed')},
        // ]);
        
        <Tooltip
        isVisible={toolTipVisible}
        content={<Text>Check this out!</Text>}
        placement="top"
        onClose={() => settoolTipVisible(!toolTipVisible)}>
    <TouchableHighlight style={styles.touchable}>
      <Text>Press me</Text>
    </TouchableHighlight>
  </Tooltip>
      )
};

const HomeTabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Library'}
        component={Books}
        options={{
          tabBarIcon: ({color}) => (
            <>
            <View>
             
<Tooltip
            height ={300}
            width ={300}
            popover={
              <View>
                <Text> it is working</Text>
              </View>
            }
          >
            <Fontisto name="home" size={25} color={color} />
                </Tooltip>
               
            </View>

            </> 
          ),
        }}
      />
      <Tab.Screen
        name={'Register'}
        component={Register}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="search" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
