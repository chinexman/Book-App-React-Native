import React from 'react'
import { View, Text ,Image, Pressable} from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Book = (props) => {

       const navigation = useNavigation();

    const book = props.book
    // console.log(book);
    return (
        <View style={styles.container}>
            <Pressable 
            onPress={()=>navigation.navigate("BookDetail",
                {
                    itemId: book,
                    
                  }
            )}>
                <View  style={styles.bookview}>
      <Image
        style={styles.image}
        source={{uri: book.image}}
      />

          {/* Bed & Bedroom  */}
          <Text style={styles.title}>
          {book.type}.{book.title} 
      </Text>
         
      </View>

    
    </Pressable>
    
        </View>
    )
}

export default Book
