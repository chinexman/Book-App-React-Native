# Getting Started with  React-native App

This project was bootstrapped with [npx react-native ChinexBookApp1 --init](https://reactnative.dev/docs/environment-setup).



## Available Scripts 

In the project directory, you can run for android:

### `yarn`
to install all dependencies for the Book app.

### `npx react-native start`
to run the metro

### `npx react-native run-android`
to build the app



In the project directory, you can run for ios:

### `yarn`
to install all dependencies for the Book app.

cd ios

### `pod install`


### `yarn ios`
to build the app


// import React from 'react'
// import { View, Button } from 'react-native'
// import Tips from 'react-native-tips'
 
 
// const MyButton = (props = {}) => (
//   <View>
//     <Tips
//       visible
//       text="This is a tips !"
//     >
//       <Button title="Hello world !"></Button>
//     </Tips>
//   </View>
// )
 
// export default MyButton

// import React, { PureComponent } from 'react'
// import { View, Button, Text } from 'react-native'
// import Tips from 'react-native-tips'
 
 
// export default class MyButton extends PureComponent {
//   constructor(props) {
//     super(props)
 
//     // 1st step - Create your helper with keys that will represent your tips
//     this.waterfallTips = new Tips.Waterfall([
//       'myTips1', 'myTips1'
//     ])
 
//     this.state = {
//       tipsVisible: null
//     }
 
//     // This method will trigger the changement of tips
//     this.handleNextTips = this.handleNextTips.bind(this)
//   }
 
//   componentDidMount() {
//     // the 'start' method will set the first Tips key into your state.
//     this.setState({
//       tipsVisible: this.waterfallTips.start()
//     })
//   }
 
//   handleNextTips() {
//     // the 'next' method will set the next tips key into your state until it has no more keys.
//     this.setState({
//       tipsVisible: this.waterfallTips.next()
//     })
//   }
 
//   render() {
//     const { tipsVisible } = this.state
 
//     return (
//       <View>
//         <Tips
//           visible={tipsVisible === 'myTips1'}
//           onRequestClose={this.handleNextTips}
//         >
//           <Button text="My button"></Button>
//         </Tips>
 
//         <Tips
//           visible={tipsVisible === 'myTips2'}
//           onRequestClose={this.handleNextTips}
//         >
//           <Text>My text</Text>
//         </Tips>
//       </View>
//     )
//   }
// }
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";
 
const CopilotText = walkthroughable(Text);
 
class HomeScreen extends Component {
    handleStartButtonPress() {
      this.props.start();
    }
  render() {
    return (
      <View>
        <CopilotStep
          text="This is a hello world example!"
          order={1}
          name="hello"
        >
          <CopilotText>Hello world!</CopilotText>
        </CopilotStep>
      </View>
    );
  }
}

export default copilot({
    overlay: "svg", // or 'view'
    animated: true // or false
  })(HomeScreen);