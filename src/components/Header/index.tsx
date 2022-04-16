import { useNavigation } from '@react-navigation/core';
import React from 'react-native';
import { GoBackIcon, Title, Wrapper, WrapperIcon } from './styles';

export function Header() {
  const { goBack } = useNavigation();

  return (
    <Wrapper>
      <WrapperIcon onPress={() => goBack()}>
        <GoBackIcon name="ios-arrow-back-outline" size={40} />
      </WrapperIcon>
      <Title>Registro</Title>
    </Wrapper>
  );
}
