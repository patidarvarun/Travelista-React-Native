import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  backContainer: {
    position: 'relative',
    marginTop: 55,
    left: 12,
    width: 40,
    padding: 10,
    borderRadius: 20,
  },
  backIcon: {width: 20, height: 20},
  loginInput: {
    marginTop: 50,
  },
  scrollContainer: {
    paddingTop: 60,
  },
  footerText: {
    color: colors.black,
    fontSize: 14,
    textAlign: 'right',
  },
  footerLink: {
    color: colors.black,
    fontWeight: '600',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDE3E0',
  },
  separatorText: {
    marginHorizontal: 20,
    fontWeight: '400',
    fontSize: 16,
    color: '#7A9085',
  },
  googleButton: {
    backgroundColor: '#DDE3E0',
  },
  nextButton: {
    marginTop: 80,
  },
});

export default styles;
