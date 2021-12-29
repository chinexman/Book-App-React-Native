import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',

  },
  author: {
    fontWeight: 'bold',
    color: '#000',

  },
  head: {
    fontWeight: 'bold',
    lineHeight: 26,
  },
  about: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#000',

  },

  rating: {
    marginVertical: 10,
    color: '#000',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  price: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
    lineHeight: 26,
    color: '#000',

  },
  categories: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
    color: '#000',

  },
  type: {
    fontSize: 18,
    lineHeight: 26,
  },
  publisher: {
    fontSize: 18,
    lineHeight: 26,
  },
  publishedDate: {
    fontSize: 18,
    lineHeight: 26,
  },
});

export default styles;
