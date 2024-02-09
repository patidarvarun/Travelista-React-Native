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
// import More from '../../../../assets/more.png';
// import Close from '../../../../assets/close.png';

import More from '../../../../assets/Icons/more.svg';
import Close from '../../../../assets/Icons/close_black.svg';
import styles from './styles';
import Input from '../../../components/Input';
import calendar from '../../../../assets/AddTripImage/calendar.png';
import Location from '../../../../assets/AddTripImage/location.png';
import Button from '../../../components/Button';
import {useState} from 'react';
import {Calendar} from 'react-native-calendars';

const AddTrip = ({navigation}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState('');
  const [minDate, setMinDate] = useState('');

  const [tripName, setTripName] = useState('');
  const [selectedFromDate, setSelectedFromDate] = useState('');
  const [selectedToDate, setSelectedToDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };
  const openCalendarFor = dateType => {
    setShowCalendar(true);
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    setMinDate(formattedToday);

    if (dateType === 'from') {
      setSelectedFromDate('');
    } else if (dateType === 'to') {
      setSelectedToDate('');
      setMinDate(selectedFromDate);
    }
  };

  const onDateSelect = day => {
    if (!selectedFromDate) {
      setSelectedFromDate(day.dateString);
      closeCalendar();
    } else if (!selectedToDate && day.dateString > selectedFromDate) {
      setSelectedToDate(day.dateString);
      closeCalendar();
    }
  };
  const closeCalendar = () => {
    setShowCalendar(false);
  };
  const onsubmit = () => {
    navigation.navigate('TravelType');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Title children="New Trip" />
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <More style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBack}>
              <Close style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.inputContent}>
          <Input
            children="Trip Name"
            placeholder="Type your Trip Name"
            value={tripName}
            onChangeText={text => setTripName(text)}
          />
          <View style={styles.inputContainer}>
            <Input
              type={'true'}
              children="From"
              placeholder="Pick a Date"
              isHalfWidth
              Image1={calendar}
              onPress={() => openCalendarFor('from')}
              value={selectedFromDate}
            />
            <Input
              type={'true'}
              children="To"
              placeholder="Pick a Date"
              isHalfWidth
              Image1={calendar}
              onPress={() => openCalendarFor('to')}
              value={selectedToDate}
            />
          </View>

          <Modal
            visible={showCalendar}
            animationType="fade"
            transparent={true}
            onRequestClose={closeCalendar}>
            <TouchableOpacity style={{flex: 1}} onPress={closeCalendar}>
              <View>
                <Calendar
                  onDayPress={onDateSelect}
                  markedDates={{
                    [selected]: {
                      selected: true,
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
                  minDate={minDate}
                />
              </View>
            </TouchableOpacity>
          </Modal>

          <Input
            children="Location"
            placeholder="choose a Location"
            Image1={Location}
            value={location}
            onChangeText={text => setLocation(text)}
          />
          <Input
            children="Description"
            placeholder="Type What you want"
            value={description}
            onChangeText={text => setDescription(text)}
          />
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
