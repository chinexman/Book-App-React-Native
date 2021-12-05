import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Register from '../screens/SignUp'
import Books from '../screens/Books'
const Tab = createBottomTabNavigator();


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
            <Fontisto name="search" size={25} color={color} />
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
}

export default HomeTabNavigator
