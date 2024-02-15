import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContent: {
    padding: 5,
    marginTop: 5,

    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginVertical: 60,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  textInputStyle: {
    marginLeft: 10,
    flex: 1,
    height: 40,
    color: 'black',
  },
});

export default styles;
