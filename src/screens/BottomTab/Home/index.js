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
import Sms from '../../../../assets/Icons/sms_black.svg';
import Smswhite from '../../../../assets/Icons/sms_white.svg';
import Notification from '../../../../assets/Icons/notification_black.svg';
import NotificationWhite from '../../../../assets/Icons/notification_white.svg';
import {HomeImage, PostData} from '../../../data';
import TravelCard from '../../../components/TravelCard';
import PostCard from '../../../components/PostCard';
import {useTheme} from '../../../Context/ThemeContext';

const Home = ({navigation}) => {
  const theme = useTheme();

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Title children="Travelista" style={textStyle} />
            <View style={styles.iconsContainer}>
              <TouchableOpacity>
                {theme === 'dark' ? (
                  <Smswhite style={styles.icon} />
                ) : (
                  <Sms style={styles.icon} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Notifications')}>
                {theme === 'dark' ? (
                  <NotificationWhite style={styles.icon} />
                ) : (
                  <Notification style={styles.icon} />
                )}
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
          renderItem={({item, index}) => <PostCard Item={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
