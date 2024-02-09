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
import {useTheme} from '../../Context/ThemeContext';

const Input = ({
  style,
  type,
  placeholder,
  Image1,
  children,
  onPress,
  isHalfWidth,
  ...props
}) => {
  const theme = useTheme();

  const mainContainerStyle = {
    // borderColor: theme === 'dark' ? 'white' : 'black',
    // backgroundColor: theme === 'dark' ? 'white' : '#EEF1F0',
  };

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const iconStyle = {
    tintColor: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <View style={[isHalfWidth && styles.halfWidthContainer]}>
      <Text style={[styles.titleText, textStyle]}>{children}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={[styles.input, style, mainContainerStyle]}>
          <TextInput
            editable={!type}
            placeholder={placeholder}
            placeholderTextColor={'#7A857A'}
            style={styles.textInput}
            {...props}
          />
          {Image1 && <Image source={Image1} style={styles.icon} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Input);
