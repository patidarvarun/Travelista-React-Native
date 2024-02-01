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
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  countryStyle: {
    fontSize: 14,
    marginBottom: 10,
  },
  timeStyle: {
    fontSize: 12,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginBottom: 30,
  },
  icon: {
    height: 20,
  },
  secondImage: {
    marginLeft: 10,
  },
});
export default styles;
