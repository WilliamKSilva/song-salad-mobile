import React, { ButtonProps } from 'react-native';
import { Title, Wrapper } from './styles';

type Props = ButtonProps & {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}
