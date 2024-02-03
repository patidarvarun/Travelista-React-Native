import React from 'react';
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import More from '../../../assets/more.png';

const Input = ({
  style,
  placeholder,
  Image1,
  children,
  onPress,
  isHalfWidth,
  ...props
}) => {
  return (
    <View style={[isHalfWidth && styles.halfWidthContainer]}>
      <Text style={styles.titleText}>{children}</Text>
      <Pressable onPress={onPress}>
        <View style={[styles.input, style]}>
          <TextInput
            editable={!Image1}
            placeholder={placeholder}
            placeholderTextColor={'#7A857A'}
            style={styles.textInput}
            {...props}
          />
          {Image1 && <Image source={Image1} style={styles.icon} />}
        </View>
      </Pressable>
    </View>
  );
};

export default React.memo(Input);
