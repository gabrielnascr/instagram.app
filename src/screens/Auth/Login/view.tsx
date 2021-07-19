import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login</Text>
      <RectButton onPress={() => navigation.navigate('MainStack')}>
        <Text>Teste</Text>
      </RectButton>
    </View>
  );
};

export default LoginScreen;
