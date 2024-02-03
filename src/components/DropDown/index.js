import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import RightTickImage from '../../../assets/AddTripImage/check.png';
const DropDown = ({options, onSelect, selectedOption}) => {
  return (
    <View style={styles.dropdownContainer}>
      <FlatList
        data={options}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[item === selectedOption ? styles.selectedOption : null]}
            onPress={() => onSelect(item)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Text
                style={[
                  styles.textStyle,
                  item === selectedOption ? styles.selectedText : null,
                ]}>
                {item}
              </Text>
              {item === selectedOption && (
                <Image
                  source={RightTickImage}
                  //   style={{width: 100, height: 100}}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default DropDown;
