import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import Button from '../../components/Button';
const Splash = ({navigation}) => {
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    const delayToShowButtons = setTimeout(() => {
      setShowButtons(true);
    }, 1000);

    return () => clearTimeout(delayToShowButtons);
  }, []);
  return (
    <View style={styles.imgContainer}>
      <ImageBackground
        style={styles.background}
        source={require('../../../assets/splash1.png')}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
          />
        </View>

        <View style={styles.container1}>
          <Text style={styles.subtitle}>All the Travel</Text>
          <Text style={styles.subtitle}>Community at one</Text>
          <Text style={styles.subtitle}>place by Travelista</Text>
        </View>

        {showButtons && (
          <View style={styles.buttonContent}>
            <Button onPress={() => navigation.navigate('Login')}>Login</Button>
            <Button
              type={'green'}
              onPress={() => navigation.navigate('Signup')}>
              Sign Up
            </Button>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};
export default React.memo(Splash);
