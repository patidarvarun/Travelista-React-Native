import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
console.log('########', width);
console.log('########', height);
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  bioContainer: {
    // flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 10,
    borderRadius: 10,
    // marginRight: 10,
    width: width * 0.4,
    // height:150,
  },
  bioText: {
    color: 'black',
    fontSize: 10,
    marginBottom: 5,
  },

  imageContainer: {
    // flex: 1,
    width: width * 0.6,
    height: 150,
  },
  wrapper: {
    marginHorizontal: 5,
  },
  image: {
    // width: width,
    // height: 149,
  },
  slide1: {
    // width: width,
    height: 149,
    // objectFit: 'cover',
    borderRadius: 20,
    // objectPosition: 'center center',
  },
  parentdiv: {
    width: '100%',
    flexDirection: 'row',
  },
});

export default styles;
