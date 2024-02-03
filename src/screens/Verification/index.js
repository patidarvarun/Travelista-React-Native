import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Input from '../../components/Input';
import {useEffect, useState} from 'react';
import Button from '../../components/Button';
const Verification = ({navigation}) => {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const areAllCodesFilled = codes.every(code => code !== '');

    setIsContinueDisabled(!areAllCodesFilled);
  }, [codes]);

  const handleCodeChange = (index, value) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
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
        <Title>We have sent you a code Please type it here</Title>
        <View style={styles.codeContainer}>
          {codes.map((code, index) => (
            <Input
              key={index}
              style={styles.codeInput}
              maxLength={1}
              keyboardType="numeric"
              value={code}
              onChangeText={value => handleCodeChange(index, value)}
            />
          ))}
        </View>

        {isContinueDisabled && isContinueDisabled ? (
          <Text style={styles.footerText}>
            Did not get a code?
            <Text
              style={styles.footerLink}
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
    </SafeAreaView>
  );
};
export default Verification;
