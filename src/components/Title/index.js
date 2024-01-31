import {Text} from 'react-native';
import styles from './styles';
import React from 'react';
const Title = ({children, style}) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};
export default React.memo(Title);
