import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: 'black',
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputContent: {
    padding: 10,
    marginTop: 10,
  },
  textInputStyle: {
    marginLeft: 10,
    flex: 1,
    height: 40,
    color: 'black',
  },
});
export default styles;
