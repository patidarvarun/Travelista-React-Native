import React from 'react';
import {View, Pressable} from 'react-native';
import styles from './styles';
const CheckBox = ({checked, onPress}) => {
  return (
    <Pressable
      hitSlop={10}
      style={[styles.container, checked ? styles.checkedBox : {}]}
      onPress={onPress}>
      {checked ? <View style={styles.innerSquare} /> : null}
    </Pressable>
  );
};
export default CheckBox;
