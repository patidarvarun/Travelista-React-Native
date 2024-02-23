import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
// const screenHeight = Dimensions.get('window').height;

console.log('kjdhfgdhgkhtgh  : >>>>>>>>>>>>>>>>> ', screenWidth * 0.49);

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftColumn: {
    width: screenWidth * 0.46,
    marginRight: 4,
  },
  leftColumnSpace: {
    marginBottom: 8,
  },
  rightColumn: {
    width: screenWidth * 0.46,
    marginLeft: 4,
  },
  rightColumnSpace: {
    marginBottom: 8,
  },
  imageStyle: {
    width: '100%',
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default styles;
