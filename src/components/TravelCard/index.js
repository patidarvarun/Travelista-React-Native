import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Title from '../Title';
const TravelCard = ({image, title, style, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View styles={styles.row}>
        <Image source={image} style={[styles.homeImage, style]} />
        <Text numberOfLines={1} style={[styles.title, styles.bottomLeftTitle]}>
          {title.substring(0, 12)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default TravelCard;
