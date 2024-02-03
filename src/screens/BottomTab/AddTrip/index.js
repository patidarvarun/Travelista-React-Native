import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Title from '../../../components/Title';
import More from '../../../../assets/more.png';
import Close from '../../../../assets/close.png';
import styles from './styles';
import Input from '../../../components/Input';
import calendar from '../../../../assets/AddTripImage/calendar.png';
import Location from '../../../../assets/AddTripImage/location.png';
import Button from '../../../components/Button';
import {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const AddTrip = ({navigation}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState('');
  const handleBack = () => {
    navigation.goBack();
  };
  const openCalendar = () => {
    setShowCalendar(true);
  };
  const closeCalendar = () => {
    setShowCalendar(false);
  };
  const onsubmit = () => {
    // console.log('Hello');
    navigation.navigate('TravelType');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Title children="New Trip" />
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <Image source={More} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBack}>
              <Image source={Close} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.inputContent}>
          <Input children="Trip Name" placeholder="Type your Trip Name" />
          <View style={styles.inputContainer}>
            <Input
              children="From"
              placeholder="Pick a Date"
              isHalfWidth
              Image1={calendar}
              onPress={openCalendar}
            />
            <Input
              children="To"
              placeholder="Pick a Date"
              isHalfWidth
              Image1={calendar}
              onPress={openCalendar}
            />
          </View>

          <Modal
            visible={showCalendar}
            animationType="fade"
            transparent={true}
            onRequestClose={closeCalendar}>
            <TouchableWithoutFeedback
              onPress={() => {
                closeCalendar();
                Keyboard.dismiss();
              }}>
              <View
                style={
                  {
                    // flex: 1,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }
                }>
                <Calendar
                  onDayPress={day => {
                    setSelected(day.dateString);
                  }}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      // disableTouchEvent: true,
                      selectedColor: '#27D97F',
                    },
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    marginHorizontal: 50,
                    marginVertical: 275,
                    width: '75%',
                  }}
                  onClose={closeCalendar}
                />
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Input
            children="Location"
            placeholder="choose a Location"
            Image1={Location}
          />
          <Input children="Description" placeholder="Type What you want" />
        </View>
      </ScrollView>
      <Button
        type={'green'}
        onPress={onsubmit}
        style={{marginBottom: 30, marginHorizontal: 10}}>
        Next
      </Button>
    </SafeAreaView>
  );
};
export default AddTrip;
