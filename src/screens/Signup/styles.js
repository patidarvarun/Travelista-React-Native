import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  backContainerStyle: {
    marginVertical: 20,
    // marginHorizontal: 20,
    // backgroundColor: 'grey',
    position: 'relative',
    width: 35,
    height: 35,
    // borderRadius: 20,
  },
  backContainer: {
    // marginVertical: 5,
    // marginHorizontal: 5,
    backgroundColor: '#F9FAFA',
    // position: 'relative',
    // marginTop: ,
    // left: 12,
    width: 30,
    height: 30,
    // padding: 10,
    margin: 2,
    borderRadius: 20,
    // justifyContent: 'center'
  },
  backIcon: {width: 20, height: 20, marginVertical: 5, marginHorizontal: 5},
  scrollContainer: {
    // paddingTop: 60,
    paddingVertical: 20,
  },

  inputContainer: {
    // paddingTop: 48,
    // paddingVertical: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: colors.black,
    fontSize: 14,
    textAlign: 'right',
  },
  footerLink: {
    color: colors.black,

    fontWeight: 'bold',
  },
  nextButton: {
    marginVertical: 50,
    // marginBottom: 20,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDE3E0',
  },
  separatorText: {
    marginHorizontal: 10,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: '#7A9085',
  },

  buttonContent: {
    // position: 'absolute',
    // justifyContent: 'space-around',
    // paddingHorizontal: 16,
    // display: 'flex',
    // width: '100%',
    // bottom: 10,
    // paddingVertical: 40,
    // paddingTop: 50,
    paddingVertical: 40,
  },
});
export default styles;
