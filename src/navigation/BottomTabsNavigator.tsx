import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/Home.screen';
import { HistoryScreen } from '../screens/History.screen';
import { AnalyticsScreen } from '../screens/Analytics.screen';

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTabsNavigator = () => (
    <Navigator>
        <Screen name='Home' component={ HomeScreen } />
        <Screen name='History' component={ HistoryScreen } />
        <Screen name='Analytics' component={ AnalyticsScreen } />
    </Navigator>
)