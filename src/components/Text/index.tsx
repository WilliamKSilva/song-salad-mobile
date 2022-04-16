import React from 'react-native';
import { Message, Wrapper } from './styles';

type Props = {
  message: string;
};

export function Text({ message }: Props) {
  return (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
}
