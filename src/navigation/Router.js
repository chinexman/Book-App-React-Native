import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/SignUp';
import {View, Text} from 'react-native';
import Login from '../screens/Login';
import Books from '../screens/Books';
import BookDetail from '../screens/BookDetail';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Sign UP'} component={Register} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Library'} component={Books} />
        <Stack.Screen name={'BookDetail'} component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
