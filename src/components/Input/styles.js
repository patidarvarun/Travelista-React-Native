import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  darkModeContainer: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#BCC7C1',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: 'Inter',
  },
  input: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderTopColor: colors.black,
    color: colors.black,
    marginVertical: 12,
  },
  textInput: {
    color: colors.black,
    flex: 1,
    fontSize: 12,
  },
  halfWidthContainer: {
    flex: 0.48,
  },

  icon: {
    marginVertical: 12,
  },
});

export default styles;
