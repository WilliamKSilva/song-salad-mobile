import React from 'react-native';
import { Wrapper, Message } from './styles';

type Props = {
  error: string;
};

export function InputError({ error }: Props) {
  return (
    <Wrapper>
      <Message>{error}</Message>
    </Wrapper>
  );
}
