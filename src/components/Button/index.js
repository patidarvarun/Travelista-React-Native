import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Button} from '@rneui/themed';

const ButtonComponent = ({onPress, style, type, disabled, children, color}) => {
  const buttonStyle = disabled
    ? styles.disabledBg
    : type === 'green'
    ? styles.greenBg
    : styles.enableBg;

  return (
    <Button
      title={children}
      color={color}
      buttonStyle={[styles.container, buttonStyle, style]}
      titleStyle={styles.text}
      onPress={onPress}
    />
  );
};

export default React.memo(ButtonComponent);
