import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import Left1 from '../../../assets/Icons/leftImage/left_image.svg';
import Left2 from '../../../assets/Icons/leftImage/left_image2.svg';
import Left3 from '../../../assets/Icons/leftImage/left_image3.svg';
import Right1 from '../../../assets/Icons/rightImage/right_image.svg';
import Right2 from '../../../assets/Icons/rightImage/right_image2.svg';
import Right3 from '../../../assets/Icons/rightImage/right_image3.svg';
const LoopImageContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Left1 />
        <Left2 />
        <Left3 />
      </View>
      <View style={styles.rightColumn}>
        <Right1 />
        <Right2 />
        <Right3 />
      </View>
    </View>
  );
};
export default LoopImageContainer;
