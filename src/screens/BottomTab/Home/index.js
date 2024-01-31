import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Title from '../../../components/Title';
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Title>Travelista</Title>
          <Image source={require('../../../../assets/sms.png')} />
          <Image source={require('../../../../assets/notification.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
