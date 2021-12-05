/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/Login';
import Register from './src/screens/SignUp';
import Book from './src/components/Book.js';
import BookList from './assets/data/Library';
import Books from './src/screens/Books';
import Router from './src/navigation/Router';

const book1= BookList[0]
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* <Register /> */}
        {/* <Login />  */}
        {/* <Book book={book1}/> */}
        {/* <Books /> */}
        <Router />
    </SafeAreaView>
  );
};



export default App;
