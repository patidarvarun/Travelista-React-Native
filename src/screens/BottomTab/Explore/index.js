import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import styles from './styles';
import BackArrow from '../../../../assets/Icons/down_line.svg';
import Menu from '../../../../assets/Icons/menu.svg';
import SearchImage from '../../../../assets/Icons/search_normal.svg';

const Explore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackArrow />
        <Text>Home</Text>
      </View>
      <View style={styles.navContainer}>
        <View style={styles.menuContainer}>
          <Menu />
        </View>

        <View style={styles.inputContainer}>
          <SearchImage style={{width: 20, height: 20, marginRight: 10}} />
          {/* <Image
            source={require('../../../../assets/HomeImage/search.png')}
            style={{width: 20, height: 20, marginRight: 10}}
          /> */}
          <TextInput style={styles.textInputStyle} placeholder="Search" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Explore;
