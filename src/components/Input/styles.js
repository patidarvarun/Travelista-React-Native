import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
  },
  input: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 16,
    // paddingHorizontal: 82,
    // padding: 82,
    paddingVertical: 12,
    borderRadius: 8,
    color: colors.black,
    marginVertical: 12,
    fontSize: 15,
  },
  // outlined: {
  //   backgroundColor: colors.white,
  //   borderWidth: 1,
  //   borderColor: colors.grey,
  //   marginHorizontal: 24,
  // },
});

export default styles;
