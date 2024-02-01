import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
const Profile = ({Item}) => {
  const {profileImage, Name, country, postTime} = Item;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={profileImage} style={styles.image} />

        <View style={styles.columnContainer}>
          <Text style={styles.nameStyle}>{Name}</Text>
          <Text style={styles.countryStyle}>{country}</Text>
          <Text style={styles.timeStyle}>{postTime}</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../../../assets/PostImage/Icon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../../assets/PostImage/archive-add.png')}
              style={[styles.secondImage, styles.icon]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
