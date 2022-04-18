import React from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Introduction } from '../screens/Introduction';
import { Share } from '../screens/Share';

export function PrivateNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Introduction"
        component={Introduction}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Share"
        component={Share}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
