import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import ButtonComponent from '../../components/Button';
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
            source={require('../../../assets/Logo_1.png')}
          />
        </View>
        {showButtons && (
          <>
            <View style={styles.container1}>
              <Text style={styles.subtitle}>All the Travel</Text>
              <Text style={styles.subtitle}>Community at one</Text>
              <Text style={styles.subtitle}>place by Travelista</Text>
            </View>

            <View style={styles.buttonContent}>
              <ButtonComponent
                children={'Login'}
                onPress={() => navigation.navigate('Login')}
              />
              <ButtonComponent
                children={'Sign Up'}
                type={'green'}
                onPress={() => navigation.navigate('Signup')}
              />
            </View>
          </>
        )}
      </ImageBackground>
    </View>
  );
};
export default React.memo(Splash);
