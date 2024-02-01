import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from './screens/Splash';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Verification from './screens/Verification';
import CreatePassword from './screens/CreatePassword';
import ResetPassword from './screens/ResetPassword';
import {Image, Text} from 'react-native';
import Home from './screens/BottomTab/Home';
import AddTrip from './screens/BottomTab/AddTrip';
import Search from './screens/BottomTab/Search';
import Explore from './screens/BottomTab/Explore';
import Advice from './screens/BottomTab/Advice';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('../assets/HomeImage/home.png');
            iconText = 'Home';
          } else if (route.name === 'AddTrip') {
            iconName = require('../assets/HomeImage/add-circle.png');
            iconText = 'AddTrip';
          } else if (route.name === 'Search') {
            iconName = require('../assets/HomeImage/search.png');
            iconText = 'Search';
          } else if (route.name === 'Explore') {
            iconName = require('../assets/HomeImage/scanning.png');
            iconText = 'Explore';
          } else if (route.name === 'Advice') {
            iconName = require('../assets/HomeImage/webcam.png');
            iconText = 'Advice';
          }

          return (
            <>
              <Image
                source={iconName}
                style={{
                  tintColor: focused ? '#22BE6F' : '#8FA198',
                  width: 24,
                  height: 24,
                  marginVertical: 5,
                }}
              />
              <Text
                style={{
                  color: focused ? '#22BE6F' : '#8FA198',
                  fontSize: 10,
                  fontWeight: '400',
                  letterSpacing: -0.24,
                  textAlign: 'center',
                  marginBottom: 30,
                }}>
                {iconText}
              </Text>
            </>
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 85,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddTrip" component={AddTrip} />

      <Tab.Screen name="Search" component={Search} />

      <Tab.Screen name="Explore" component={Explore} />

      <Tab.Screen name="Advice" component={Advice} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);
