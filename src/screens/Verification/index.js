import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Platform,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import BackIcon from '../../../assets/Icons/back.svg';
import styles from './styles';
import Title from '../../components/Title';
import Button from '../../components/Button';
import {useTheme} from '../../Context/ThemeContext';
const CELL_COUNT = 6;
const Verification = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
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
    setIsContinueDisabled(otp.length !== CELL_COUNT);
  }, [otp]);
  return (
    <SafeAreaView style={[{flex: 1}, mainContainerStyle]}>
      <View style={styles.container}>
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
          <Title style={textStyle}>
            We have sent you a code Please type it here
          </Title>
          <View style={[styles.codeContainer, textStyle]}>
            <CodeField
              value={otp}
              onChangeText={setOtp}
              cellCount={CELL_COUNT}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              // rootStyle={{marginHorizontal: 10}}
              rootStyle={[styles.inputStyle, textStyle]}
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[
                    styles.codeInput,
                    textStyle,
                    isFocused && {borderColor: 'blue'},
                  ]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
          {isContinueDisabled && isContinueDisabled ? (
            <Text style={[styles.footerText, textStyle]}>
              Did not get a code?
              <Text
                style={[styles.footerLink, textStyle]}
                onPress={() => console.log('Hello')}>
                {' '}
                Resend it
              </Text>
            </Text>
          ) : (
            <Text>{''}</Text>
          )}
        </ScrollView>
        <Button
          style={styles.nextButton}
          type={'green'}
          disabled={isContinueDisabled}
          onPress={() => navigation.navigate('CreatePassword')}>
          Continue
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(Verification);
