import {View, Text, TextInput} from 'react-native';
import styles from './styles';
const DetailInput = ({
  label,
  value,
  onChangeText,
  editable,
  isHalfWidth,
  style,
}) => {
  return (
    <View style={[isHalfWidth && styles.halfWidthContainer, styles.container]}>
      <Text>{label}</Text>
      <TextInput
        style={{
          flex: 1,
          color: 'black',
          fontSize: 14,
          fontWeight: '700',
          padding: -30,
          borderColor: 'gray',
        }}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        multiline={true}
      />
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '100%',
        }}
      />
    </View>
  );
};
export default DetailInput;
