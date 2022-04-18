import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PublicNavigation } from './public-navigation';
import { PrivateNavigation } from './private-navigation';

export function Navigation() {
  return (
    <NavigationContainer>
      <PrivateNavigation />
    </NavigationContainer>
  );
}
