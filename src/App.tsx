import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabsNavigator } from './navigation/BottomTabsNavigator';

export const App = () => (
  <NavigationContainer>
    <BottomTabsNavigator />
  </NavigationContainer>
)