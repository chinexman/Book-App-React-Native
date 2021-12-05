import React from 'react'
import { View, Text } from 'react-native'

const Favourites = (props) => {
    // console.log(props.route.params)
    
    const details = props.route.params.itemId;
    console.log(details)
    return (
        <View>
            <Text>this is favourites book</Text>
            <Text>{details.description}</Text>
        </View>
    )
}

export default Favourites
