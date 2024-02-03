import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import EditPen from '../../../assets/AddTripImage/edit_pen.png';
import Close from '../../../assets/close.png';
const Details = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Title children="View Details" />
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <Image source={EditPen} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBack}>
              <Image source={Close} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{fontSize: 12}}>Trip Name</Text>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>
            Visiting Canada
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Details;
