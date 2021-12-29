import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9B404',

  },

  frequencyheading: {
    width: '90%',
    // marginHorizontal: 10,
    marginLeft: '5%',
    // marginTop: '20%',
    backgroundColor: '#fff',
    height: '100%',
    borderRadius: 15,
    //     alignItems:'center',
    //  justifyContent:'center',
  },

  frequencyheadingtext: {
    color: '#000000',
    fontSize: 15,
    paddingTop: '5%',
    marginLeft: '5%',
    // marginTop: '20%',
    fontWeight: 'bold',
  },
  strictheadingtext2: {
    color: '#000000',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  amountInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '90%',
    height: 45,
    marginBottom: 20,
    marginLeft: '5%',
    marginTop: '5%',
    elevation: 10,

    alignItems: 'center',
  },

  pickerinput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '90%',
    height: 45,
    marginBottom: 20,
    marginLeft: '5%',
    marginTop: '5%',
    elevation: 10,

    // alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonnext: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#F9B404',
    borderRadius: 15,
    height: '10%',
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonnexttext: {
    color: '#000000',
    fontSize: 15,
  },

  buttomfrequency: {
    width: '100%',
    height: '5%',
    flexDirection: 'row',
    backgroundColor: '#F9B404',
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerbuttom: {
    width: '40%',
    height: '10%',
    backgroundColor: '#000000',
    // marginTop:'%10',
    // marginBottom:'%10',
  },
});

export default styles;
