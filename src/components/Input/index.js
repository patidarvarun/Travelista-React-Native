import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Input = ({style, children, ...props}) => {
  return (
    <View>
      <Text style={styles.titleText}>{children}</Text>
      <TextInput style={[styles.input, style]} {...props} />
    </View>
  );
};

export default React.memo(Input);
