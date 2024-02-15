import React from 'react';
import {View, Pressable} from 'react-native';
import styles from './styles';
import {useTheme} from '../../Context/ThemeContext';
const CheckBox = ({checked, onPress}) => {
  const theme = useTheme();

  const mainContainerStyle = [theme === 'dark' && styles.darkModeContainer];

  const innerSquareDark = [theme === 'dark' && styles.darkModeSquare];
  return (
    <Pressable
      hitSlop={10}
      style={[
        styles.container,
        mainContainerStyle,
        checked ? styles.checkedBox : {},
      ]}
      onPress={onPress}>
      {checked ? <View style={[styles.innerSquare, innerSquareDark]} /> : null}
    </Pressable>
  );
};
export default CheckBox;
