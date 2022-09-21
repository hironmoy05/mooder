import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabsNavigator } from './navigation/BottomTabsNavigator';
import { AppProvider } from './App.Provider';

export const App = () => (
  <AppProvider>
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  </AppProvider>
)