import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {categories} from '../../data';
import {Button} from 'react-native-paper';
import Title from '../../components/Title';
import {useState} from 'react';
import colors from '../../constants/colors';
import {useTheme} from '../../Context/ThemeContext';
import {useTranslation} from 'react-i18next';

const CategoriesScreen = ({navigation}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const theme = useTheme();
  const {t, i18n} = useTranslation();

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const borderColor = {
    borderColor: theme === 'dark' ? 'white' : 'black',
  };

  const handlePress = item => {
    // Check if the item is already selected
    const index = selectedCategories.findIndex(
      category => category.id === item.id,
    );
    if (index !== -1) {
      setSelectedCategories(prevSelected =>
        prevSelected.filter(c => c.id !== item.id),
      );
    } else {
      setSelectedCategories(prevSelected => [...prevSelected, item]);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.titleRow}>
        <Title children={t('Preferences')} style={textStyle} />
      </View>

      <View style={{paddingHorizontal: 10}}>
        <FlatList
          numColumns={3}
          data={categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.buttonContainer,
                {
                  backgroundColor: selectedCategories.some(
                    c => c.id === item.id,
                  )
                    ? colors.green
                    : 'transparent',
                },
              ]}>
              <Button
                style={[styles.button, borderColor]}
                mode="outlined"
                onPress={() => handlePress(item)}
                textColor={[styles.buttonText, textStyle]}>
                {item.title}
              </Button>
            </View>
          )}
        />

        <Button
          style={{marginTop: 20}}
          textColor={[styles.buttonText, textStyle]}
          mode="outlined"
          onPress={() => {
            console.log(selectedCategories);
            navigation.navigate('Routes');
          }}>
          {t('Next')}
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 2,
    marginVertical: 5,
    borderRadius: 20,
  },
  button: {borderColor: 'black'},
  buttonText: {
    color: 'black',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  icon: {
    width: 100,
    height: 100,
    marginLeft: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 12,
  },
});
export default CategoriesScreen;
