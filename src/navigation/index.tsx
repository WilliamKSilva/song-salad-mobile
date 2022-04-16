import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PublicNavigation } from './public-navigation';

export function Navigation() {
  return (
    <NavigationContainer>
      <PublicNavigation />
    </NavigationContainer>
  );
}
