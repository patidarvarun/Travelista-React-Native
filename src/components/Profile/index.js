import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import ShareIcon from '../../../assets/Icons/share.svg';
import ArchiveIcon from '../../../assets/Icons/archive_add.svg';
import {useTheme} from '../../Context/ThemeContext';
const Profile = ({Item}) => {
  const theme = useTheme();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const {profileImage, Name, country, postTime} = Item;

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
            <ShareIcon />
          </TouchableOpacity>

          <TouchableOpacity>
            <ArchiveIcon style={[styles.secondImage, styles.icon]} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
