import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Animated,
  Easing,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import BackArrow from '../../../../assets/Icons/down_line.svg';
import BackArrowWhite from '../../../../assets/Icons/down_line_white.svg';
import Menu from '../../../../assets/Icons/menu.svg';
import SearchImage from '../../../../assets/Icons/search_normal_light.svg';
import {ExploreData} from '../../../ExploreData';
import ExploreComponent from '../../../components/ExploreComponent';
import {useTheme} from '../../../Context/ThemeContext';
import DrawerComponent from '../../../components/DrawerComponent';
import Modal from 'react-native-modal';
import LocationImage from '../../../../assets/Icons/location.svg';

const Explore = ({navigation}) => {
  const theme = useTheme();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  // const [pans] = useState(ExploreData.map(() => new Animated.ValueXY()));
  const [pans] = useState(
    Array.from({length: ExploreData.length}, () => new Animated.ValueXY()),
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [displayedCards, setDisplayedCards] = useState([]);
  const batchSize = 3;
  const {width, height} = Dimensions.get('screen');
  const handleBack = () => {
    navigation.goBack();
  };

  const [animations] = useState(ExploreData.map(() => new Animated.Value(0)));
  const mooveLR = (index, randDuration) => {
    Animated.timing(animations[index], {
      toValue: 1,
      duration: randDuration,
      easing: Easing.out(Easing.sin),
      useNativeDriver: true,
    }).start(() => mooveRL(index, randDuration));
  };

  const mooveRL = (index, randDuration) => {
    Animated.timing(animations[index], {
      toValue: 0,
      duration: randDuration,
      easing: Easing.out(Easing.sin),
      useNativeDriver: true,
    }).start(() => mooveLR(index, randDuration));
  };

  useEffect(() => {
    if (ExploreData.length > 0) {
      const timer = setTimeout(() => {
        const nextBatch = ExploreData.slice(
          displayedCards.length,
          displayedCards.length + batchSize,
        );

        if (displayedCards.length < ExploreData.length) {
          setDisplayedCards(prevCards => [...prevCards, ...nextBatch]);
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [displayedCards, ExploreData]);

  const toggleDrawer = () => {
    setIsModalVisible(!isModalVisible);
  };

  // const deleteCard = index => {
  //   console.log('Index :>>> ', index);
  //   setDisplayedCards(prevCards => {
  //     const updatedCards = [...prevCards];
  //     updatedCards.splice(index, 1);
  //     return updatedCards;
  //   });
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack}>
          {theme === 'dark' ? <BackArrowWhite /> : <BackArrow />}
        </TouchableOpacity>
        <Text style={[styles.textStyle, textStyle]}>Home</Text>
      </View>
      <View style={styles.navContainer}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Menu />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <SearchImage style={{width: 20, height: 20, marginRight: 10}} />
          <TextInput
            style={[styles.textInputStyle, textStyle]}
            placeholder="Search"
          />
        </View>
      </View>

      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        hasBackdrop={true}
        backdropColor="black"
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationInTiming={300}
        animationOutTiming={300}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            margin: 0,
          }}>
          <View style={styles.inputContent}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder="Terms"
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder="Activity"
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder="Length of the trip"
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder="Keywords"
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder="Random Sentences"
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View
        style={{display: 'flex', height: height - 100, position: 'relative'}}>
        {displayedCards.map((item, index) => {
          const randPosition = Math.random() >= 0.5 ? 'left' : 'right';
          let randDuration =
            Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;

          // let transformMax = Math.floor(
          //   Math.random() * (width / 2 - 1 + 1) + 1,
          // );
          let transformMax = 0;

          mooveLR(index, randDuration);

          return (
            <Animated.View
              key={index}
              style={[
                {
                  zIndex: parseInt(index),
                  position: 'absolute',
                  top:
                    index == 0
                      ? 0
                      : parseInt(Math.floor(Math.random() * (540 - 1 + 1) + 1)),
                  left:
                    randPosition === 'left'
                      ? parseInt(Math.floor(Math.random() * (60 - 1 + 1) + 1))
                      : -parseInt(Math.floor(Math.random() * (60 - 1 + 1) + 1)),
                },
                styles.animation_view,
                {
                  transform: [
                    {
                      translateX: animations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          randPosition === 'left' ? 0 : transformMax,
                          randPosition === 'left'
                            ? transformMax
                            : -transformMax,
                        ],
                      }),
                    },
                  ],
                },
              ]}>
              <ExploreComponent
                Item={item}
                pan={pans[index]}
                deleteCard={() => deleteCard(index)}
                cardPosition={randPosition === 'left' ? '10' : '60'}
                cardAnimatePos={randPosition}
              />
            </Animated.View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Explore);
