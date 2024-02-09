import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  //   ################################ Render CSS #############
  notifyContainer: {},
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  columnContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginBottom: 30,
  },
  timeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
  },
  desStyle: {
    fontSize: 12,
    flexWrap: 'wrap',
    marginRight: 50,
  },
  timeStyle: {
    fontSize: 12,
  },
});

export default styles;
