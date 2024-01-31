import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
const CreatePassword = ({navigation}) => {
  //   const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleBack = () => {
    navigation.goBack();
  };

  const onCheckboxPress = () => {
    setAgreed(value => !value);
  };
  const onsubmit = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Please enter Password.');
    } else if (password !== confirmPassword) {
      Alert.alert('Enter Password do not match.');
    } else if (!agreed) {
      Alert.alert('You should agreed to the terms');
    } else {
      navigation.navigate('Login');
    }
  };
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
        <Title>Create Password</Title>
        <View style={styles.passwordInput}>
          <Input
            children="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <Input
            children="Confirm Your Password"
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>

        <View style={styles.row}>
          <CheckBox checked={agreed} onPress={onCheckboxPress} />
          <View style={{marginHorizontal: 10}}>
            <Text styles={styles.agreeText}>
              I accept to the
              <Text style={styles.link}> Inventra terms</Text> and
              <Text style={styles.link}> Conditions </Text>
              and the
              <Text style={styles.link}> privacy policy. </Text>
            </Text>
          </View>
        </View>

        <Button style={styles.nextButton} type={'green'} onPress={onsubmit}>
          Continue
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreatePassword;
