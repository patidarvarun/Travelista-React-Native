import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
const Verification = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Pressable
          hitSlop={8}
          style={styles.backContainer}
          onPress={handleBack}>
          <Image
            source={require('../../../assets/back1.png')}
            style={styles.backIcon}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Verification;
