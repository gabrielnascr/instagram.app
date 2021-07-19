import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack } from './Auth';
import { MainStack } from './Main';

const RootStack = createStackNavigator();

export function Routes() {
  return (
    <RootStack.Navigator initialRouteName="AuthStack">
      <RootStack.Screen
        options={{ headerShown: false }}
        name="AuthStack"
        component={AuthStack}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name="MainStack"
        component={MainStack}
      />
    </RootStack.Navigator>
  );
}
