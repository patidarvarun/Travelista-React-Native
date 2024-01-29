import {Text} from 'react-native';
import styles from './styles';
import React from 'react';
const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default React.memo(Title);
