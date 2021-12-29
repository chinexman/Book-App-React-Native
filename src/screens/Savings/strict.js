import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';
import Colors from './colors';




const StrictSavings = () => {
    return (
        // <Page backgroundColor={Colors.primary}>

        // <View  style={styles.container}>
 <View>
            <View >
                <Text style={styles.strictheadingtext}>Herconomy Strict Savin</Text>
            </View>

            <Text style={styles.bodytext}>Earn of to 10% per annum</Text>
            <Pressable style={styles.buttonstrict}>
                <Text style={styles.buttonstricttext}>Start Saving</Text>
            </Pressable>

            <View style={styles.buttom}>
                <View style={styles.innerbuttom}></View>
            </View>
        </View>
        // </Page>

    )
}

export default StrictSavings