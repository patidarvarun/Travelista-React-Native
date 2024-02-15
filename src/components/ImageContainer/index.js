import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import CoverImage from '../../../assets/Icons/Cover.svg';
import CoverImage1 from '../../../assets/Icons/Cover1.svg';
import {useTheme} from '../../Context/ThemeContext';
const ImageContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parentdiv}>
        <View style={styles.bioContainer}>
          <Text style={styles.bioText}>
            🌍✈️ Adventure seeker exploring the globe, one destination at a
            time.
          </Text>
          <Text style={styles.bioText}>
            📸 Capturing the world's wonders through my lens.
          </Text>
          <Text style={styles.bioText}>
            Embracing cultures, chasing sunsets, and creating memories that last
            a lifetime.
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            showsPagination={false}>
            <View style={styles.slide1}>
              <CoverImage />
            </View>
            <View style={styles.slide1}>
              <CoverImage1 />
            </View>
          </Swiper>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ImageContainer;
