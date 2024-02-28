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
import BackIcon from '../../../assets/Icons/back.svg';
import {useTheme} from '../../Context/ThemeContext';

const Login = ({navigation}) => {
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();

  const mainContainerStyle = [theme === 'dark' && styles.darkModeContainer];

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const iconStyle = {
    tintColor: theme === 'dark' ? 'white' : 'black',
  };

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
          <BackIcon style={styles.backIcon} />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <Title style={textStyle}>Welcome Back</Title>
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

        <View style={{marginVertical: 10}}>
          <Text style={[styles.footerText, textStyle]}>
            Forget Password?{' '}
            <Text
              style={[styles.footerLink, textStyle]}
              onPress={() => navigation.navigate('ResetPassword')}>
              Reset It
            </Text>
          </Text>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine}></View>
          <Text style={styles.separatorText}>or</Text>
          <View style={styles.separatorLine}></View>
        </View>

        <GoogleButton>Login With Google</GoogleButton>
      </ScrollView>

      <View style={{marginBottom: 20}}>
        <Button
          style={styles.nextButton}
          type={'green'}
          disabled={isContinueDisabled}
          onPress={onsubmit}>
          Login
        </Button>

        <Text style={[styles.footerText, textStyle, {textAlign: 'center'}]}>
          Don't have an Account?
          <Text
            style={[styles.footerLink, textStyle]}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Login;
