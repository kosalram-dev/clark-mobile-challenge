import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from '../components';
import {Products, Settings} from '../screens';
import {ROUTES} from '../utils/constants';
import useTheme from '../hooks/useTheme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.PRODUCTS}
      screenOptions={{
        tabBarActiveTintColor: colors.brandTint,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: colors.white,
          padding: 8,
          height: 64,
        },
      }}>
      <Tab.Screen
        name={ROUTES.PRODUCTS}
        component={Products}
        options={{
          tabBarLabel: ROUTES.PRODUCTS,
          tabBarIcon: ({color}) => (
            <Icon size={16} name="appstore-o" type="AntDesign" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{
          tabBarLabel: ROUTES.SETTINGS,
          tabBarIcon: ({color}) => (
            <Icon size={16} name="settings" type="Feather" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
