import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Splash, ProductDetails} from '../screens';
import {ROUTES} from '../utils/constants';
import TabNavigator from './tabNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.SPLASH}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.SPLASH} component={Splash} />
      <Stack.Screen name={ROUTES.TABS} component={TabNavigator} />
      <Stack.Screen
        name={ROUTES.PRODUCT_DETAILS}
        component={ProductDetails}
        options={{headerShown: true, headerBackTitleVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
