import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import Title from '../../../components/Title';
import styles from './styles';
import Sms from '../../../../assets/Icons/sms.svg';
import Notification from '../../../../assets/Icons/notification.svg';
import {HomeImage, PostData} from '../../../data';
import TravelCard from '../../../components/TravelCard';
import PostCard from '../../../components/PostCard';

const Home = ({navigation}) => {
  const colorScheme = Appearance.getColorScheme();

  const mainContainerStyle = [
    styles.container,
    colorScheme === 'dark' && styles.darkModeContainer,
  ];
  const textStyle = {
    color: colorScheme === 'dark' ? 'white' : 'black',
  };

  return (
    <SafeAreaView style={mainContainerStyle}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Title children="Travelista" style={textStyle} />
            <View style={styles.iconsContainer}>
              <TouchableOpacity>
                <Sms fill={'white'} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Notifications')}>
                <Notification fill={'white'} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <FlatList
          horizontal
          style={{marginHorizontal: 10}}
          data={HomeImage}
          keyExtractor={item => String(item.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TravelCard
              onPress={() => navigation.navigate('StoryView', {item})}
              image={item?.url}
              title={item?.title}
              style={
                index === 0 ? {height: 144, width: 117, borderRadius: 12} : {}
              }
            />
          )}
        />

        <FlatList
          accessibilityElementsHidden
          style={{marginHorizontal: 10}}
          data={PostData}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => (
            <PostCard colorScheme={colorScheme} Item={item} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
