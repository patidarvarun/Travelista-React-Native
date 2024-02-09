import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 20,
    paddingHorizontal: 10,
    // alignItems: 'flex-start',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 20,
  },
  statusContainer: {
    // backgroundColor: 'red',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
  },
  boldText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#7A857A',
  },
});

export default styles;
