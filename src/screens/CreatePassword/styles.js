import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  scrollContainer: {
    paddingTop: 60,
  },
  backContainer: {
    backgroundColor: '#F9FAFA',
    position: 'relative',
    marginTop: 55,
    left: 12,
    width: 40,
    padding: 10,
    borderRadius: 20,
  },
  backIcon: {width: 20, height: 20},
  passwordInput: {
    marginTop: 60,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  agreeText: {
    color: '#565656',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    marginHorizontal: 16,
  },
  link: {
    color: '#22BE6F',
  },
  nextButton: {marginVertical: 250},
});

export default styles;
