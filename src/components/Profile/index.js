import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
const Profile = ({Item, colorScheme}) => {
  const {profileImage, Name, country, postTime} = Item;
  const textStyle = {
    color: colorScheme === 'dark' ? 'white' : 'black',
  };
  const iconStyle = {
    tintColor: colorScheme === 'dark' ? 'white' : 'black',
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={profileImage} style={styles.image} />

        <View style={styles.columnContainer}>
          <Text style={[styles.nameStyle, textStyle]}>{Name}</Text>
          <Text style={[styles.countryStyle, textStyle]}>{country}</Text>
          <Text style={[styles.timeStyle, textStyle]}>{postTime}</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              style={[styles.icon, iconStyle]}
              source={require('../../../assets/PostImage/Icon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../../assets/PostImage/archive-add.png')}
              style={[styles.secondImage, styles.icon, iconStyle]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
