import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundWrapper: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  spaceContainer: {
    padding: 12,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {},
  columnContainer: {
    // flexDirection: 'column',
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
    // marginVertical: 14,
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
