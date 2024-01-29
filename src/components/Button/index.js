import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress, style, type, disabled, children}) => {
  const buttonStyle = disabled
    ? styles.disabledBg
    : type === 'green'
    ? styles.greenBg
    : styles.enableBg;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, buttonStyle, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
