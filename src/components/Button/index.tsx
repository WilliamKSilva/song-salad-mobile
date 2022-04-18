import React, { ButtonProps } from 'react-native';
import { Title, Wrapper } from './styles';

type Props = ButtonProps & {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress }: Props) {
  return (
    <Wrapper onPress={onPress}>
      <Title>{title}</Title>
    </Wrapper>
  );
}
