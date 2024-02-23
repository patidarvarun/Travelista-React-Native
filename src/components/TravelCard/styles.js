import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },

  homeImage: {
    height: 144,
    width: 117,
    borderRadius: 12,
    borderColor: colors.black,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 14,
    fontSize: 10,
    color: colors.white,
    lineHeight: 14,
    fontWeight: '400',
  },
});

export default styles;
