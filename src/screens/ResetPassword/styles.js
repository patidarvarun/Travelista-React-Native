import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  backContainer: {
    // backgroundColor: 'grey',
    position: 'relative',
    marginTop: 55,
    left: 12,
    width: 40,
    padding: 10,
    borderRadius: 20,
  },
  backIcon: {width: 20, height: 20},
  scrollContainer: {
    flex: 1,
    // flexGrow: 1,
    paddingTop: 60,
  },
  resetInput: {
    marginTop: 60,
    // marginBottom: 16,
  },
  nextButton: {
    marginBottom: 20,
  },
});

export default styles;
