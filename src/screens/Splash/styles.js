import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    padding: 46,
    paddingTop: 0,
  },
  logo: {
    width: 143,
    height: 143,
    marginTop: 150,
    alignSelf: 'center',
  },
  subtitle: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle1: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  container1: {
    paddingTop: 30,
  },
  buttonContent: {
    display: 'flex',
    width: '90%',
    marginBottom:30
  },
});

export default styles;
