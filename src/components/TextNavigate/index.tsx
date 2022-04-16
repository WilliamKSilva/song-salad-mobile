import { useNavigation } from '@react-navigation/core';
import React from 'react-native';
import { Message, Wrapper } from './styles';

type Props = {
  message: string;
  routeName: string;
};

export function TextNavigate({ message, routeName }: Props) {
  const { navigate } = useNavigation();

  return (
    <Wrapper onPress={() => navigate(routeName)}>
      <Message>{message}</Message>
    </Wrapper>
  );
}
