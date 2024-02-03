import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  // scrollContainer: {
  //   paddingTop: 60,

  // },
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
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '100%',
  },
  codeInput: {
    width: 50,
    height: 80,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#F9FAFA',
    borderColor: '#BCC7C1',
    textAlign: 'center',
    fontSize: 18,
  },
  footerText: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    fontFamily: 'Inter',
    // marginVertical: 10,
  },
  footerLink: {
    color: colors.black,
    fontWeight: '600',
  },
  nextButton: {
    marginBottom: 20,
  },

  // Changes Css

  scrollContainer: {
    paddingVertical: 20,
  },
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
});
export default styles;
