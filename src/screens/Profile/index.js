import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import SendIcon from '../../../assets/Icons/send.svg';
import GroupIcon from '../../../assets/Icons/Group.svg';
import ProfileImage from '../../components/ProfileImage';
import ImageContainer from '../../components/ImageContainer';
import LoopImageContainer from '../../components/LoopImageContainer';
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Title children="Robert Fox" />
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={{marginRight: 16}}>
                <SendIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginTop: 4}}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Advice')}>
                <GroupIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <ProfileImage />
        </View>
        <View>
          <ImageContainer />
        </View>
        <View>
          <LoopImageContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
