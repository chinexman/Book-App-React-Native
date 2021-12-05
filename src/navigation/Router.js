import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
// import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from '../screens/SignUp';
import { View, Text } from 'react-native';
import HomeTabNavigator from './HomeTabNavigator';
import Login from '../screens/Login'
import Books from '../screens/Books'
import BookDetail from '../screens/BookDetail'
import Favourites from '../screens/Favourite';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            {/* <Stack.Screen
                name={"BookDetail"}
                component={BookDetail}
                />
                <Stack.Screen
                name={"Favourite"}
                component={Favourites}
                /> */}
                 <Stack.Screen
                name={"Sign UP"}
                component={Register}
                />
                <Stack.Screen
                name={"Login"}
                component={Login}
                />
           
                
                  <Stack.Screen
                name={"Library"}
                component={Books}
                /> 
                <Stack.Screen
                name={"BookDetail"}
                component={BookDetail}
                />
                 <Stack.Screen
                name={"Favourite"}
                component={Favourites}
                />
            </Stack.Navigator>
        </NavigationContainer>
       
    )
}

export default Router
