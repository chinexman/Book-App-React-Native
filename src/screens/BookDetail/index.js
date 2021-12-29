import React,{useState} from 'react';
import {View, Text, Pressable, Image,TouchableHighlight,ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Tooltip from 'rn-tooltip';


const BookDetail = props => {
  const [isVisible, setisVisible] = useState(false)
  const book = props.route.params.itemId;
  console.log(book.image);

  return (
    <View style={styles.container}>
      <ScrollView>

      <Image style={styles.image} source={{uri: book.image}} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>by {book.author}</Text>
      <Text style={styles.rating}>rating: {book.rating}</Text>
       {/* <Tooltip
        height ={300}
        width ={300}
        popover={
          <View>
            <Text> it is working</Text>
          </View>
        }
      >
      <Text style={styles.about}>About This Book</Text>
            </Tooltip> 
 */}
           
      <Text style={styles.description} numberOfLines={4}>
        {book.description}
      </Text>
      <Text style={styles.price}>price: ${book.price}</Text>
      <Text style={styles.categories}>categories:{book.categories}</Text>
      <Text style={styles.publisher}>Publisher: {book.publisher}</Text>
      <Text style={styles.publishedDate}>
        Publisher Date: {book.publishedDate}
      </Text>
      <Text style={styles.type}>Type: {book.type}</Text>
     
      </ScrollView>
     
    </View>
  );
};

export default BookDetail;
