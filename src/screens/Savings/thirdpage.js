import React from 'react'
import { View, Text } from 'react-native'

const thirdpage = () => {
    return (
        <View style={styles.container}>
      <View style={styles.frequencyheading}>
        
        
        <Text style={styles.frequencyheadingtext}>
          Select Preferred time
        </Text>
        <View style={styles.pickerinput}>
       <Picker
        selectedValue={selectedValue1}
        style={{ height: 50, width: 150 }}
        mode={'dropdown'}

        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
      >
        <Picker.Item label="04:00 am" value="04:00 am" />
        <Picker.Item label="05:00 am" value="05:00 am" />
        <Picker.Item label="06:00 am" value="06:00 am" />
        <Picker.Item label="07:00 am" value="07:00 am"/>
        <Picker.Item label="08:00 am" value="08:00 am"/>



      </Picker> 
    </View>
    <Text style={styles.frequencyheadingtext}>
          Where would you want to fund your saving?
        </Text>

    <View style={styles.pickerinput}>
       <Picker
        selectedValue={selectedValue2}
        style={{ height: 50, width: 150 }}
        mode={'dropdown'}

        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
      >
        <Picker.Item label="My wallets" value="wallets" />
        <Picker.Item label="direct Bank transfer" value="Bank" />
        <Picker.Item label="Herconomy Card" value="Herconomy Card" />
        <Picker.Item label="Debit Card" value="Card"/>



      </Picker> 
    </View>
    <Text style={styles.frequencyheadingtext}>
          When do you want to start?
        </Text>

        <View style={styles.pickerinput}>
       <Picker
        selectedValue={selectedValue3}
        style={{ height: 50, width: 150 }}
        mode={'dropdown'}

        onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
      >
        <Picker.Item label="Now" value="Now" />
        <Picker.Item label="tommorow" value="tommorow" />



      </Picker> 
    </View>

      
        <Pressable style={styles.buttonnext}>
                <Text style={styles.buttonnexttext}>Next</Text>
            </Pressable>


        <View style={styles.buttomfrequency}>
                <View style={styles.innerbuttom}></View>
            </View>
      </View>

     
    </View>
    )
}

export default thirdpage
