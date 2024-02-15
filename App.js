import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
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
import CreateNewPassword from './src/screens/CreateNewPassword';
import Notifications from './src/screens/Notifications';
import Profile from './src/screens/Profile';
import {ThemeProvider, useTheme} from './src/Context/ThemeContext';
import Home from './src/screens/BottomTab/Home';
const Stack = createStackNavigator();

// const mainContainerStyle = [theme === 'dark' && styles.darkModeContainer];

const App = () => {
  const scheme = useColorScheme();

  // const theme = useTheme();
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFFFFF',
    },
  };
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <ThemeProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : appTheme}>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Routes" component={Routes} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="CreatePassword" component={CreatePassword} />
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
          />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="StoryView" component={StoryView} />
          <Stack.Screen name="TravelType" component={TravelType} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  back: {
    width: 36,
    height: 36,
  },
  darkModeContainer: {
    backgroundColor: 'black',
  },
});

export default App;
