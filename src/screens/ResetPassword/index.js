import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Button from '../../components/Button';
const ResetPassword = ({navigation}) => {
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [email, setEmail] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    if (email.trim() !== '') {
      setIsContinueDisabled(false);
    } else {
      setIsContinueDisabled(true);
    }
  }, [email]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          hitSlop={8}
          style={styles.backContainer}
          onPress={handleBack}>
          <Image
            source={require('../../../assets/back1.png')}
            style={styles.backIcon}
          />
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <Title>Reset Password</Title>
        <View style={styles.resetInput}>
          <Input
            children="Email"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
          />
        </View>
      </ScrollView>
      <Button
        type={'green'}
        disabled={isContinueDisabled}
        style={styles.nextButton}
        onPress={() => navigation.navigate('Verification')}>
        Reset
      </Button>
    </SafeAreaView>
  );
};
export default ResetPassword;