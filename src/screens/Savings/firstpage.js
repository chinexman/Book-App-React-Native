import React from 'react'
import { View, Text } from 'react-native'

const firstpage = () => {
    return (
        <View style={styles.container}>
                  {/* <ScrollView> */}
              <View>
    
    
              <View  style={styles.strictheading}>
                    <Text style={styles.strictheadingtext}>Herconomy </Text>
                    <Text style={styles.strictheadingtext2}> Strict Saving</Text>
    
                </View>
    
                <Text style={styles.bodytext}>Earn of to 10% per annum</Text>
                <Pressable style={styles.buttonstrict}>
                    <Text style={styles.buttonstricttext}>Start Saving</Text>
                </Pressable>
    
                <View style={styles.buttom}>
                    <View style={styles.innerbuttom}></View>
                </View>
                </View>
    
    {/* </ScrollView> */}
        </View>
      );
}

export default firstpage
