import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/SignUp';
import {View, Text} from 'react-native';
import Login from '../screens/Login';
import Books from '../screens/Books';
import BookDetail from '../screens/BookDetail';
import SignupScreen from '../screens/SignUp/SignUpScreen'
//  import Tips from '../screens/SignUp/Tips'
import HomeTabNavigator from './HomeTabNavigator';
import StrictSavings from '../screens/Savings/strict';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (


    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name={'Sign '} component={Tips} /> */}

         <Stack.Screen name={'Strict'} component={Login} /> 

        {/* <Stack.Screen name={'Strict'} component={StrictSavings} /> */}
        <Stack.Screen name={'HomeTab'} component={HomeTabNavigator} />

        <Stack.Screen name={'Library'} component={Books} />
        <Stack.Screen name={'BookDetail'} component={BookDetail} />
        <Stack.Screen name={'SignupScreen'} component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
