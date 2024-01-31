import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Input = ({style, children, isHalfWidth, ...props}) => {
  return (
    <View style={[isHalfWidth && styles.halfWidthContainer]}>
      <Text style={styles.titleText}>{children}</Text>
      <TextInput style={[styles.input, style]} {...props} />
    </View>
  );
};

export default React.memo(Input);
