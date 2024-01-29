import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import React from 'react';
import Button from '../../components/Button';
const Splash = ({navigation}) => {
  return (
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
      <View style={styles.buttonContent}>
        <Button onPress={() => navigation.navigate('Login')}>Login</Button>
        <Button type={'green'} onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Button>
      </View>
    </ImageBackground>
  );
};
export default React.memo(Splash);
