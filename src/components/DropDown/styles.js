import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  dropdownContainer: {
    flex: 1,
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  selectedOption: {
    backgroundColor: 'red',
    marginVertical: 10,
  },
  selectedText: {
    color: 'white',
  },
  textStyle: {
    margin: 10,
  },
});

export default styles;
