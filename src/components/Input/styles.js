import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    fontFamily: 'Inter',
  },
  input: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    color: colors.black,
    marginVertical: 12,
    fontSize: 15,
    flex: 1,
  },
  halfWidthContainer: {
    flex: 0.48,
  },
});

export default styles;
