import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import { DEBUG } from '../constants';
import { DashboardScreen } from '../screens/dashboard/Dashboard.screen';
import { DebugScreen } from '../screens/debug/Debug.screen';
import { SettingsScreen } from '../screens/settings/Settings.screen';
import { getTabBarIcon } from './TabStack.helpers';

export const TabStack = createBottomTabNavigator();

export function TabNavigation() {
  const theme = useTheme();

  return (
    <TabStack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={({ route }) => ({
        lazy: true,
        headerStyle: {
          backgroundColor: theme['700'],
          shadowColor: theme['500'],
        },
        headerTitleStyle: {
          color: theme.text,
        },
        tabBarStyle: {
          backgroundColor: theme['700'],
          shadowColor: theme['500'],
        },
        tabBarActiveTintColor: theme['100'],
        tabBarInactiveTintColor: theme['400'],
        tabBarIcon: ({ focused, color, size }) => {
          return getTabBarIcon(route.name, focused, color, size);
        },
      })}
    >
      <TabStack.Screen name={'Dashboard'} component={DashboardScreen} />
      <TabStack.Screen name={'Settings'} component={SettingsScreen} />
      {DEBUG && <TabStack.Screen name={'Debug'} component={DebugScreen} />}
    </TabStack.Navigator>
  );
}