import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  // imageContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  homeImage: {
    // height: 144,
    // width: 117,
    borderRadius: 12,
    borderColor: 'black',
    // marginTop: 30,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 14,
    fontSize: 10,
    color: 'white',
    lineHeight: 14,
    fontWeight: '400',
  },
});

export default styles;
