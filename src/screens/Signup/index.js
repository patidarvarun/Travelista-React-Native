import {View, Text, SafeAreaView, Image, Alert, Pressable} from 'react-native';
import styles from './styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Title from '../../components/Title';
import Input from '../../components/Input';
import {useEffect, useState} from 'react';
import Button from '../../components/Button';
import GoogleButton from '../../components/GoogleButton';
const Signup = ({navigation}) => {
  const [values, setValues] = useState({});
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const handleBack = () => {
    navigation.goBack();
  };

  const onChange = (value, key) => {
    setValues(val => ({
      ...val,
      [key]: value,
    }));
  };

  useEffect(() => {
    const allFieldsFilled =
      values.first_name ||
      values.last_name ||
      values.email ||
      values.phone_number;

    setIsContinueDisabled(!allFieldsFilled);
  }, [values]);

  const onsubmit = () => {
    if (!values.first_name || !values.last_name) {
      Alert.alert('Please enter the first name and last name');
      return;
    } else if (!values.email) {
      Alert.alert('Please Enter email');
    } else if (!values.phone_number) {
      Alert.alert('Please Enter Phone Number');
    } else {
      navigation.navigate('Verification');
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
        <Title>Sign up</Title>
        <View style={styles.inputContainer}>
          <Input
            children="First Name"
            onChangeText={val => onChange(val, 'first_name')}
            isHalfWidth
          />
          <Input
            children="Last Name"
            onChangeText={val => onChange(val, 'last_name')}
            isHalfWidth
          />
        </View>

        <Input
          children="Email"
          onChangeText={val => onChange(val, 'email')}
          keyboardType="email-address"
        />
        <Input
          children="Phone Number"
          onChangeText={val => onChange(val, 'phone_number')}
        />

        <Text style={styles.footerText}>
          Already have an account?
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine}></View>
          <Text style={styles.separatorText}>or</Text>
          <View style={styles.separatorLine}></View>
        </View>

        <GoogleButton>Continue With Google</GoogleButton>
        <Button
          style={styles.nextButton}
          type={'green'}
          disabled={isContinueDisabled}
          onPress={onsubmit}>
          Continue
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Signup;
