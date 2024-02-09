import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  darkModeContainer: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    padding: 10,
    marginVertical: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  icon: {
    width: 100,
    height: 100,
    tintColor: 'red',
    marginLeft: 16,
  },
});

export default styles;
