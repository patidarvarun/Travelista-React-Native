import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Title from '../../../components/Title';
import styles from './styles';
import Sms from '../../../../assets/HomeImage/sms.png';
import Notification from '../../../../assets/HomeImage/notification.png';
import {HomeImage, PostData} from '../../../data';
import TravelCard from '../../../components/TravelCard';
import PostCard from '../../../components/PostCard';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Title>Travelista</Title>
            <View style={styles.iconsContainer}>
              <TouchableOpacity>
                <Image source={Sms} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Notification} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList
          horizontal
          style={{marginHorizontal: 18}}
          data={HomeImage}
          keyExtractor={item => String(item.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TravelCard
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
          style={{marginHorizontal: 20}}
          data={PostData}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => (
            <PostCard
              Item={item}
              // profileImage={item?.profileImage}
              // name={item?.Name}
              // country={item?.country}
              // postTime={item?.postTime}
              // postDesc={item?.postDesc}
              // postImage={item?.postImage}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
