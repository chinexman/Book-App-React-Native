import React from 'react'
import { View, Text } from 'react-native'
import {Picker} from '@react-native-picker/picker';


const secondpage = () => {
    const [selectedValue, setSelectedValue] = useState("your preference");

    return (
        <View style={styles.container}>
      <View style={styles.frequencyheading}>
        <Text style={styles.frequencyheadingtext}>
          How often do you want to save{' '}
        </Text>

        <View style={styles.pickerinput}>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        mode={'dropdown'}

        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select your preference" value="" />
        <Picker.Item label="Daily" value="Daily" />
        <Picker.Item label="Weekly" value="Weekly" />
        <Picker.Item label="Monthly" value="Monthly"/>
        <Picker.Item label="Just this once" value="Once"/>



      </Picker> 
    </View>
        
        <Text style={styles.frequencyheadingtext}>
          Amount you will always save
        </Text>

        <TextInput
          style={styles.amountInput}
          placeholder="#500"
          // ref={passwordInputRef}
          // onChangeText={password => setPassword(password)}
          // onEndEditing={(e)=>handlePasswordChange(e.nativeEvent.text)}

          // underlineColorAndroid={'transparent'}
        />
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

export default secondpage
