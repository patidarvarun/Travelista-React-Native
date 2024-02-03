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
import Button from '../../components/Button';
import {useEffect, useState} from 'react';
import GoogleButton from '../../components/GoogleButton';
const Login = ({navigation}) => {
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsContinueDisabled(false);
    } else {
      setIsContinueDisabled(true);
    }
  }, [email, password]);

  const onsubmit = () => {
    navigation.navigate('Routes');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainerStyle}>
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
        <Title>Welcome Back</Title>
        <Title>Traveller</Title>

        <View style={styles.loginInput}>
          <Input
            children="Email"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
          />
          <Input
            children="Password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>

        <Text style={styles.footerText}>
          Forget Password?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('ResetPassword')}>
            Reset It
          </Text>
        </Text>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine}></View>
          <Text style={styles.separatorText}>or</Text>
          <View style={styles.separatorLine}></View>
        </View>

        <GoogleButton>Login With Google</GoogleButton>

        <View style={{paddingVertical: 40}}>
          <Button
            style={styles.nextButton}
            type={'green'}
            // disabled={isContinueDisabled}
            onPress={onsubmit}>
            Login
          </Button>

          <Text style={[styles.footerText, {textAlign: 'center'}]}>
            Don't have an Account?
            <Text
              style={styles.footerLink}
              onPress={() => navigation.navigate('Signup')}>
              {' '}
              Sign up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
