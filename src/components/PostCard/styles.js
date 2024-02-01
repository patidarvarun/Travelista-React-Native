import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
  },
  descContainer: {
    marginVertical: 14,
  },
  descTitle: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  commentNav: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
    // paddingHorizontal: 16,
  },
  commentText: {
    marginLeft: 2,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  commentIcon: {
    // width: 22,
    // height: 22,
  },
});

export default styles;
