import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './src/screens/Signup';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Verification from './src/screens/Verification';
import ResetPassword from './src/screens/ResetPassword';
import CreatePassword from './src/screens/CreatePassword';
import Routes from './src/Routes';
import StoryView from './src/screens/StoryView';
import TravelType from './src/screens/TravelType';
import Details from './src/screens/Details';
const Stack = createStackNavigator();

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
      {/* <Routes /> */}
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Routes" component={Routes} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="StoryView" component={StoryView} />
        <Stack.Screen name="TravelType" component={TravelType} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
