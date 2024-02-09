import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import Home from './screens/BottomTab/Home';
import AddTrip from './screens/BottomTab/AddTrip';
import Search from './screens/BottomTab/Search';
import Explore from './screens/BottomTab/Explore';
import Advice from './screens/BottomTab/Advice';
import HomeImage from '../assets/Icons/home.svg';
import AddTripImage from '../assets/Icons/add_circle.svg';
import SearchImage from '../assets/Icons/search_normal.svg';
import ScanningImage from '../assets/Icons/scanning.svg';
import AdviceImage from '../assets/Icons/webcam.svg';
import {useIsFocused} from '@react-navigation/native';
import {useTheme} from './Context/ThemeContext';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? 'black' : 'white',
          borderTopColor: theme === 'dark' ? 'black' : 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeImage style={{tintColor: focused ? '#22BE6F' : '#8FA198'}} />
          ),
        }}
      />
      <Tab.Screen
        name="AddTrip"
        component={AddTrip}
        options={{
          tabBarIcon: ({focused}) => (
            <AddTripImage
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
            <SearchImage style={{tintColor: focused ? '#22BE6F' : '#8FA198'}} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <ScanningImage
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
            <AdviceImage style={{tintColor: focused ? '#22BE6F' : '#8FA198'}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Routes;
