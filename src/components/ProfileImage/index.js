import {View, Text, SafeAreaView} from 'react-native';
import {Image} from 'react-native-svg';
import ProfileImg from '../../../assets/Icons/ProfileImage.svg';
import styles from './styles';
const ProfileImage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <ProfileImg width={130} height={110} />
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.boldText}>66.5K</Text>
              <Text style={styles.normalText}>Followers</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.boldText}>2238</Text>
              <Text style={styles.normalText}>Following</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.boldText}>1508</Text>
              <Text style={styles.normalText}>Trips/Travels</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.boldText}>238</Text>
              <Text style={styles.normalText}>Advice</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileImage;
