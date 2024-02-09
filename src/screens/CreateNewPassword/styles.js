import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  // backContainer: {
  //   backgroundColor: '#F9FAFA',
  //   position: 'relative',
  //   marginTop: 55,
  //   left: 12,
  //   width: 40,
  //   padding: 10,
  //   borderRadius: 20,
  // },
  // backIcon: {width: 20, height: 20},
  backContainerStyle: {
    marginVertical: 20,

    position: 'relative',
    width: 35,
    height: 35,
  },
  backContainer: {
    backgroundColor: '#F9FAFA',
    width: 30,
    height: 30,
    margin: 2,
    borderRadius: 20,
  },
  backIcon: {width: 20, height: 20, marginVertical: 5, marginHorizontal: 5},
  passwordInput: {
    marginTop: 30,
  },

  nextButton: {
    marginBottom: 20,
  },
});

export default styles;
