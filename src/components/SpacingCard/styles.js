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
    fontSize: 14,
    // marginBottom: 10,
  },
  timeStyle: {
    fontSize: 12,
  },
  spaceDesc: {
    marginVertical: 14,
  },

  spaceDescStyle: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
});

export default styles;
