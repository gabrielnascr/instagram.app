import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginContainer } from '../../screens/Auth/Login';
import { SignUpContainer } from '../../screens/Auth/SignUp';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginContainer}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUpContainer}
      />
    </Stack.Navigator>
  );
}
