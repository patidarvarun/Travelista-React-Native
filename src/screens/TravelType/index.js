import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Input from '../../components/Input';
import styles from './styles';
import Title from '../../components/Title';
import More from '../../../assets/Icons/more.svg';
import Close from '../../../assets/Icons/close_black.svg';
import DownArrow from '../../../assets/AddTripImage/down.png';
import {useState} from 'react';
import DropDown from '../../components/DropDown';
import Button from '../../components/Button';

const TravelType = ({navigation}) => {
  const [dropdownVisible, setDropdownVisible] = useState({
    adventures: false,
    activities: false,
    typeOfTravel: false,
    travelPrivacy: false,
  });
  const [selectedOptions, setSelectedOptions] = useState({
    adventures: '',
    activities: '',
    typeOfTravel: '',
    travelPrivacy: '',
  });
  const [tickVisible, setTickVisible] = useState({
    adventures: false,
    activities: false,
    typeOfTravel: false,
    travelPrivacy: false,
  });
  const handleBack = () => {
    navigation.goBack();
  };
  const handleOptionSelect = (dropdownType, selectedOption) => {
    setSelectedOptions(prevSelected => ({
      ...prevSelected,
      [dropdownType]: selectedOption,
    }));

    setTickVisible(prevVisible => ({
      ...prevVisible,
      [dropdownType]: true,
    }));

    toggleDropdown(dropdownType);
  };
  console.log(selectedOptions);
  const toggleDropdown = dropdownType => {
    setDropdownVisible(prevVisible => ({
      ...prevVisible,
      [dropdownType]: !prevVisible[dropdownType],
    }));
  };

  const data = [
    {
      key: 'adventures',
      label: 'Adventures',
      placeholder: 'Choose Adventures',
      options: ['Cycling', 'Canoe', 'Biking', 'Skiing'],
    },
    {
      key: 'activities',
      label: 'Activities',
      placeholder: 'Choose Activities',
      options: ['Activity 1', 'Activity 2', 'Activity 3', 'Activity 4'],
    },
    {
      key: 'typeOfTravel',
      label: 'Type of Travel',
      placeholder: 'Choose Type of Travel',
      options: ['Local', 'Global'],
    },
    {
      key: 'travelPrivacy',
      label: 'Travel Privacy',
      placeholder: 'Who can see your travel?',
      options: ['Only me', 'Others'],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Title children="Choose" />
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <More style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBack}>
              <Close style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <Title children="Travel Type" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <FlatList
          style={styles.inputContainer}
          data={data}
          renderItem={({item}) => (
            <View>
              <Input
                type={'true'}
                children={item.label}
                placeholder={item.placeholder}
                value={selectedOptions[item.key]}
                Image1={DownArrow}
                onPress={() => toggleDropdown(item.key)}
              />
              {dropdownVisible[item.key] && (
                <DropDown
                  options={item.options}
                  onSelect={selectedOption =>
                    handleOptionSelect(item.key, selectedOption)
                  }
                  selectedOption={selectedOptions[item.key]}
                />
              )}
            </View>
          )}
          keyExtractor={item => item.key}
        />
      </ScrollView>
      <View style={{marginHorizontal: 15, marginBottom: 10}}>
        <Button type={'green'} onPress={() => navigation.navigate('Details')}>
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default TravelType;
