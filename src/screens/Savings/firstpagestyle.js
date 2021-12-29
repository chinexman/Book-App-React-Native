import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

  container:{
   flex:1,
  },

  strictheading:{
    width: '80%',
    marginLeft: '10%',
    marginTop: '20%',
    backgroundColor: '#F9B404',
    height:'40%',
    borderRadius:15,
    alignItems:'center',
 justifyContent:'center',
    
},

strictheadingtext:{
    color: "#000000",
    fontSize:30,
    // marginLeft: '20%',
    // marginTop: '20%',
    fontWeight:'bold',



},
strictheadingtext2:{
  color: "#000000",
  fontSize:30,
  alignItems:'center',
  justifyContent:'center',
    fontWeight:'bold',


},


bodytext:{
    color: "#000000",
    fontSize:15,
    marginTop: '5%',
    marginLeft: '20%',


},

buttonstrict:{
    width: '60%',
    marginLeft:'20%',
    backgroundColor: '#F9B404',
    borderRadius:10,

    marginTop: '10%',
 alignItems:'center',
 justifyContent:'center',

},
buttonstricttext:{
    color: "#000000",
    fontSize:25,

},


buttom:{
    width: '100%',
    height: '10%',
    flexDirection:'row',
    backgroundColor: '#F9B404',
     marginTop: '39%',
    alignItems:'center',
    justifyContent:'center',
   

},
innerbuttom:{
  width: '40%',
    height: '9%',
    backgroundColor: '#000000',
    // marginTop:'%10',
      // marginBottom:'%10',

}
 

});

export default styles;
