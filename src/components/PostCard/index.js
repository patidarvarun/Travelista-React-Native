import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';
import Profile from '../Profile';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SpacingCard from '../SpacingCard';
const PostCard = ({Item, colorScheme}) => {
  const imageStyle = {
    tintColor: colorScheme === 'dark' ? 'white' : 'black',
  };
  const desStyle = {
    color: colorScheme === 'dark' ? 'white' : 'black',
  };
  const {postDesc, postImage} = Item;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Profile Item={Item} colorScheme={colorScheme} />
        <View style={styles.captionContainer}>
          <View style={styles.descContainer}>
            <Text style={[styles.descTitle, desStyle]}>{`"${postDesc}"`}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={postImage} style={styles.postImage} />

            <View style={styles.commentNav}>
              <View style={styles.navContainer}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/PostImage/arrow.png')}
                    style={[styles.commentIcon, imageStyle]}
                  />
                </TouchableOpacity>
                <Text style={[styles.commentText, desStyle]}>2K</Text>
              </View>

              <View style={styles.navContainer}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/PostImage/heart.png')}
                    style={[styles.commentIcon, imageStyle]}
                  />
                </TouchableOpacity>

                <Text style={[styles.commentText, desStyle]}>2K</Text>
              </View>
              <View style={styles.navContainer}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/PostImage/message.png')}
                    style={[styles.commentIcon, imageStyle]}
                  />
                </TouchableOpacity>
                <Text style={[styles.commentText, desStyle]}>2K</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View>
        <SpacingCard Item={Item} />
      </View>
    </>
  );
};
export default PostCard;
