import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 14,
    marginVertical: 8,
  },
  text: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '600',
  },
  disabledBg: {
    backgroundColor: '#BEF4D9',
    opacity: 0.5,
  },
  enableBg: {
    backgroundColor: colors.white,
  },
  greenBg: {
    backgroundColor: colors.green,
  },
});

export default styles;
