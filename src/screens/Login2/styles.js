import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 700,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  logo1: {
    width: 37,
    height: 37,
    
    backgroundColor:'#F9B404',
    // marginTop:297,
    // marginLeft: 10,

    
  },

  logo2cover: {
    width: 87,
    height: 87,
    backgroundColor:'#F9B404',
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    // marginTop:297,
    // marginLeft: 10,

    
  },
  modalheading :{
    fontSize: 19,
    fontWeight: "bold",

  },
  login2: {
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 30,
     marginTop: '50%',
    height: 259,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  modaltextStyle: {
    color: "#000000",
    fontWeight: "bold",
    fontSize:24,
    // textAlign: "center",
     marginLeft:20,
  },
  modaltextStyle2: {
    color: "#000000",
    fontSize:15,
    // fontWeight: "bold",
    // textAlign: "center",
     marginLeft:20,
     marginBottom:5,
  },
  modalbutton: {
    // backgroundColor: "#F194FF",
    width: '100%',
    flexDirection: 'row',
          alignItems: 'flex-end',
          

     justifyContent: 'space-evenly',
    marginLeft:20,
    
   
    // marginRight:20,

  },

  modalText:{
flexDirection: 'column',
         alignItems: 'flex-start',

    justifyContent: 'space-between',
  },
  buttonskip :{
    alignItems :'flex-end',
    color: "#000000",
    fontSize:15,
    fontWeight:'bold',
  },
  buttonskipText :{
    alignItems :'flex-end',
    color: "#000000",
    fontSize:15,
    fontWeight:'bold',
  },
  buttonGotIt :{
    alignItems :'center',
    width: '15%',
    height: 25,
    color: '#ffffff',
    backgroundColor:'#F9B404',
    borderRadius:10,
  },
  buttonGotItText :{
    // alignItems :'center',
    // width: '15%',
    // height: 25,
    color: '#000000',
    fontSize:15,
    // backgroundColor:'#F9B404',
    // borderRadius:10,
  },

  logo: {
    width: Dimensions.get('screen').width - 20,
    height: 100,
    marginBottom:50,
    marginHorizontal: 10,

    
  },
  login: {
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 30,
    paddingTop: 10,
    height: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },

  textInput: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    width: '85%',
    height: 45,
    marginBottom: 20,
    elevation: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  button: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: '#1c315c',
  },
  buttoncontainer: {
    width: '80%',
    marginTop: 50,
    marginBottom: 5,
  },
  title1: {
    color: '#1c315c',

    // backgroundColor: '#1c315c',
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 22
  // },

  
  buttonOpen: {
    backgroundColor: "#F194FF",
    // alignItems: 'end',
    // justifyContent: 'end',
    marginRight:20,

  },
  textStyle: {
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
     marginTop:20,
  },
 

});

export default styles;
