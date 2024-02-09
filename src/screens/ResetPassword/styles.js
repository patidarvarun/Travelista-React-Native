import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    // height:"auto"
  },
  // backContainer: {
  //   // backgroundColor: 'grey',
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
  scrollContainer: {
    // flex: 1,
    // flexGrow: 1,
    // paddingTop: 60,
    paddingVertical: 20,
  },
  resetInput: {
    marginTop: 30,
    // marginBottom: 16,
  },
  nextButton: {
    marginBottom: 30,
  },
});

export default styles;
