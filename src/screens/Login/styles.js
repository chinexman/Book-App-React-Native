import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 700,
    resizeMode: 'cover',
    justifyContent: 'center',
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
});

export default styles;
