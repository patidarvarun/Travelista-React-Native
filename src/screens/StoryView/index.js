import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import ProfileImage from '../../../assets/HomeImage/storyProImage.png';
import Profile from '../../components/Profile';
const StoryView = ({navigation}) => {
  //   const {item} = route?.params || {};
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../../assets/HomeImage/Image.png')}
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={ProfileImage} style={styles.image} />

          <View style={styles.columnContainer}>
            <Text style={styles.nameStyle}>Jane Cooper</Text>
            <Text style={styles.countryStyle}>Copenhagen, Denmark</Text>
            <Text style={styles.timeStyle}>5 Days ago</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity>
              <Image
                style={styles.icon}
                source={require('../../../assets/AddTripImage/more.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleBack}>
              <Image
                source={require('../../../assets/AddTripImage/close.png')}
                style={[styles.secondImage, styles.icon]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default StoryView;
