import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Routes } from './src/navigations/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
