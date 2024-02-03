import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  countryStyle: {
    color: 'black',
    fontSize: 12,
    marginBottom: 5,
  },
  timeStyle: {
    color: 'black',
    fontSize: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginBottom: 30,
  },

  secondImage: {
    marginLeft: 15,
  },
});
export default styles;
