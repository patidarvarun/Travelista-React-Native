import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 40,
  },
  logo: {
    width: 143,
    height: 143,
    marginVertical: 80,
    alignSelf: 'center',
  },
  subtitle: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 30,
    fontFamily: 'Inter',
  },
  container1: {
    // marginTop: 120,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  buttonContent: {
    position: 'absolute',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    // display: 'flex',
    width: '100%',
    bottom: 30,
  },
});

export default styles;
