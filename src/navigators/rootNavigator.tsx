import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Products, ProductDetails} from '../screens';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductDetails"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
