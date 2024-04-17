import {StyleSheet, I18nManager} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'Inter',
    // textAlign: I18nManager.isRTL ? 'right !important' : 'left !important',
  },
});

export default styles;
