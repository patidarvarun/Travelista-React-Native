import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Routes from './src/Routes';

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={appTheme}>
      <Routes />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
