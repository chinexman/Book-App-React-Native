import React from 'react'
import { SafeAreaView ,View, Text,FlatList,StyleSheet } from 'react-native'
import Library from '../../../assets/data/Library'
import Book from '../../components/Book.js/index.js'
import styles from './styles'
const Library1 = Library[0]
const Books = () => {
    return (
         <View style={styles.container}>   

             {/* <Book book={Library1} /> */}
            <FlatList
                data={Library}
                renderItem={({item})=><Book book={item} />}
                contentContainerStyle={{
                    flexGrow: 1,
                    }}
            /> 
            </View> 
    )
}

export default Books

