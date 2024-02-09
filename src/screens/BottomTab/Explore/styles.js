import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textInputStyle: {
    flex: 1,
    height: 40,
    color: 'black',
  },
});
export default styles;
