import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import styles from './styles';
import Left1 from '../../../assets/Icons/leftImage/left_image.svg';
import Left2 from '../../../assets/Icons/leftImage/left_image2.svg';
import Left3 from '../../../assets/Icons/leftImage/left_image3.svg';
import Right1 from '../../../assets/Icons/rightImage/right_image.svg';
import Right2 from '../../../assets/Icons/rightImage/right_image2.svg';
import Right3 from '../../../assets/Icons/rightImage/right_image3.svg';
const LoopImageContainer = () => {
  const {width, height} = Dimensions.get('window');
  const imageWidth = (width - 40) / 4;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftColumn}>
        <View style={styles.leftColumnSpace}>
          <Left1 />
        </View>
        <View style={styles.leftColumnSpace}>
          <Left2 />
        </View>
        <View style={styles.leftColumnSpace}>
          <Left3 />
        </View>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.rightColumnSpace}>
          <Right1 />
        </View>
        <View style={styles.rightColumnSpace}>
          <Right2 />
        </View>
        <View style={styles.rightColumnSpace}>
          <Right3 />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoopImageContainer;
