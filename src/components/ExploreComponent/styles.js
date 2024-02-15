import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  backgroundWrapper: {
    // flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  spaceContainer: {
    // flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  background: {
    // flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  moreIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    tintColor: 'black',
  },
  columnContainer: {
    marginLeft: 10,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  countryStyle: {
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  },
  timeStyle: {
    color: 'black',
    fontSize: 10,
  },
  spaceDesc: {
    marginTop: 34,
  },
  spaceDescStyle: {
    color: 'black',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
});

export default styles;
