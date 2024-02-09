import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',s
    // paddingHorizontal: 12,
    paddingTop: 20,
  },
  leftColumn: {
    // flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
    // marginRight: 10,
  },
  rightColumn: {
    // flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
    // marginLeft: 10,
  },
  image: {
    width: '100%',
    // height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
});

export default styles;
