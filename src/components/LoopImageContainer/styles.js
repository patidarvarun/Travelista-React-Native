import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    marginTop: 20,
  },
  leftColumn: {
    marginLeft: 10,
    flex: 1,
    // marginRight: 10,
  },
  leftColumnSpace: {
    marginBottom: 10,
  },
  rightColumn: {
    marginLeft: 10,
    flex: 1,
    
  },
  rightColumnSpace: {
    marginBottom: 10,
  },
});

export default styles;
