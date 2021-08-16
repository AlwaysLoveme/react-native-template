import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {tabs} from '@/navigation';
import {RootStackParamList, Routes} from '@/navigation/interface';

const Tabs: React.FC = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  const screenOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerTitleAlign: 'center',
    headerTintColor: '#333',
    headerStyle: {
      elevation: 0,
      // backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontSize: 16,
    },
  };
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const icons: Record<string, string> = {
            Home: 'home',
            User: 'user',
          };
          // You can return any component that you like here!
          return (
            <FontAwesomeIcon
              name={icons[route.name]}
              size={size}
              color={color}
            />
          );
        },
        ...screenOptions,
      })}>
      {tabs.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          options={route.options}
          getComponent={route.getComponent}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;
