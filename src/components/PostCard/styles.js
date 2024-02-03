import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  captionContainer: {},
  descContainer: {
    marginVertical: 14,
  },
  descTitle: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Inter',
  },
  postImage: {
    width: '100%',
    borderRadius: 12,
  },
  commentIcon: {
    color: 'black',
  },
  commentNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  commentText: {
    marginLeft: 2,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default styles;
