import {View, Text, SafeAreaView, FlatList, Pressable} from 'react-native';
import BackArrow from '../../../assets/Icons/down_line.svg';
import BackArrowWhite from '../../../assets/Icons/down_line_white.svg';
import styles from './styles';
import React from 'react';
import CommentICon from '../../../assets/Icons/commenticon.svg';
import TrendingIcon from '../../../assets/Icons/trending_icon.svg';
import LikedIcon from '../../../assets/Icons/liked_icon.svg';
import AdviceIcon from '../../../assets/Icons/advice_icon.svg';
import NewFollowIcon from '../../../assets/Icons/newfollow_icon.svg';
import {useTheme} from '../../Context/ThemeContext';
import { notifications } from '../../data';

// const notifications = [
//   {
//     id: 1,
//     image: CommentICon,
//     title: 'Comment On Post',
//     des: 'canaking_dis and 87 others comment on your post',
//     time: '34m ago',
//     timeTitle: 'New',
//   },
//   {
//     id: 2,
//     image: TrendingIcon,
//     title: 'Trending Post',
//     des: 'Your post about Canada trip is on trend.',
//     time: '2 days ago',
//     timeTitle: 'New',
//   },
//   {
//     id: 3,
//     image: LikedIcon,
//     title: 'Liked Post',
//     des: 'canaking_dis and 87 others liked your post',
//     time: '1m ago',
//     timeTitle: 'New',
//   },
//   {
//     id: 4,
//     image: AdviceIcon,
//     title: 'Advice',
//     des: 'canaking_dis and 87 others gave an advice on your post',
//     time: '20 hours ago',
//     timeTitle: 'New',
//   },
//   {
//     id: 5,
//     image: NewFollowIcon,
//     title: 'New Follower',
//     des: 'canaking_dis and 87 others followed you',
//     time: '34m ago',
//     timeTitle: 'New',
//   },
//   {
//     id: 6,
//     image: CommentICon,
//     title: 'Comment On Post',
//     des: 'canaking_dis and 87 others comment on your post',
//     time: '34m ago',
//     timeTitle: 'Yesterday',
//   },
//   {
//     id: 7,
//     image: TrendingIcon,
//     title: 'Trending Post',
//     des: 'Your post about Canada trip is on trend.',
//     time: '2 days ago',
//     timeTitle: 'Yesterday',
//   },
//   {
//     id: 8,
//     image: LikedIcon,
//     title: 'Liked Post',
//     des: 'canaking_dis and 87 others liked your post',
//     time: '1m ago',
//     timeTitle: 'Yesterday',
//   },
//   {
//     id: 9,
//     image: AdviceIcon,
//     title: 'Advice',
//     des: 'canaking_dis and 87 others gave an advice on your post',
//     time: '20 hours ago',
//     timeTitle: 'Yesterday',
//   },
//   {
//     id: 10,
//     image: NewFollowIcon,
//     title: 'New Follower',
//     des: 'canaking_dis and 87 others followed you',
//     time: '34m ago',
//     timeTitle: 'Yesterday',
//   },
// ];

const Notifications = ({navigation}) => {
  const theme = useTheme();

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const handlePress = () => {
    navigation.goBack();
  };

  const renderItem = ({item}) => {
    const IconComponent = item.image;
    return (
      <View style={styles.notifyContainer}>
        <View style={styles.rowContainer}>
          <IconComponent />
          <View style={styles.columnContainer}>
            <Text style={styles.titleStyle}>{item?.title}</Text>
            <Text style={styles.desStyle}>{item?.des}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Text style={styles.timeStyle}>{item?.time}</Text>
          </View>
        </View>
      </View>
    );
  };
  const keyExtractor = item => item.id.toString();
  const groupedNotifications = notifications.reduce((grouped, notification) => {
    const groupKey = notification.timeTitle;
    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(notification);
    return grouped;
  }, {});

  const groupedData = Object.keys(groupedNotifications).reduce((data, key) => {
    data.push({title: key, data: groupedNotifications[key]});
    return data;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable hitSlop={10} onPress={handlePress}>
          {theme === 'dark' ? <BackArrowWhite /> : <BackArrow />}
        </Pressable>
        <Text style={[styles.textInputStyle, textStyle]}>Notification</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={groupedData}
        renderItem={({item}) => (
          <>
            <Text style={[styles.timeTitle, textStyle]}>{item.title}</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={item.data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
export default React.memo(Notifications);
