import React from 'react'
import { View, Text,Pressable,Image} from 'react-native'
 import { useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';

const BookDetail = (props) => {
    const book = props.route.params.itemId;
console.log(book.image)
  
    return (<View style={styles.container}>
       
  <Image
    style={styles.image}
    source={{uri: book.image}}
  /> 

      {/* Bed & Bedroom  */}
      <Text style={styles.title}>
      {book.title} 
  </Text>

  <Text style={styles.author}>
      {book.author} 
  </Text>
      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
     {book.description}
  </Text>


  {/* Bed & Bedroom  */}
  <Text style={styles.rating}>
    {book.rating} copy
  </Text>



  {/*  Old price & new price */}
  <Text style={styles.price}>
    ${book.price}
  </Text>


  <Text style={styles.categories}>
    ${book.categories}
  </Text>
  <Text style={styles.publish}>
    ${book.publisher}
  </Text>
  <Text style={styles.publisherDate}>
    ${book.publisherDate}
  </Text>
  <Text style={styles.type}>
    ${book.type}
  </Text>

    </View>
    )
}

export default BookDetail