import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';
import Profile from '../Profile';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SpacingCard from '../SpacingCard';
const PostCard = ({Item}) => {
  const {postDesc, postImage} = Item;
  return (
    <SafeAreaView style={styles.container}>
      <Profile Item={Item} />
      <View style={styles.captionContainer}>
        <View style={styles.descContainer}>
          <Text style={styles.descTitle}>{`"${postDesc}"`}</Text>
        </View>
        <View>
          <Image source={postImage} style={styles.postImage} />
          <View style={styles.commentNav}>
            <View style={styles.navContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/PostImage/arrow.png')}
                  style={styles.commentIcon}
                />
              </TouchableOpacity>
              <Text style={styles.commentText}>2K</Text>
            </View>

            <View style={styles.navContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/PostImage/heart.png')}
                  style={styles.commentIcon}
                />
              </TouchableOpacity>

              <Text style={styles.commentText}>2K</Text>
            </View>
            <View style={styles.navContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/PostImage/message.png')}
                  style={styles.commentIcon}
                />
              </TouchableOpacity>
              <Text style={styles.commentText}>2K</Text>
            </View>
          </View>
        </View>
      </View>

      <SpacingCard Item={Item} />
    </SafeAreaView>
  );
};
export default PostCard;
