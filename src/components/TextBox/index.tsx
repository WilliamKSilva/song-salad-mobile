import React from 'react-native';
import { Container, Number, Text } from './styles';

type Props = {
  number: number;
  text: string;
};

export function TextBox({ number, text }: Props) {
  return (
    <Container>
      <Number>{number}- </Number>
      <Text>{text}</Text>
    </Container>
  );
}
