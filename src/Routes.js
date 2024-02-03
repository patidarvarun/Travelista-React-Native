import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import Home from './screens/BottomTab/Home';
import AddTrip from './screens/BottomTab/AddTrip';
import Search from './screens/BottomTab/Search';
import Explore from './screens/BottomTab/Explore';
import Advice from './screens/BottomTab/Advice';
const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/HomeImage/home.png')}
              style={{tintColor: focused ? '#22BE6F' : '#8FA198'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/HomeImage/add-circle.png')}
              style={{tintColor: focused ? '#22BE6F' : '#8FA198'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/HomeImage/search.png')}
              style={{tintColor: focused ? '#22BE6F' : '#8FA198'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/HomeImage/scanning.png')}
              style={{tintColor: focused ? '#22BE6F' : '#8FA198'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Advice"
        component={Advice}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/HomeImage/webcam.png')}
              style={{tintColor: focused ? '#22BE6F' : '#8FA198'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Routes;
