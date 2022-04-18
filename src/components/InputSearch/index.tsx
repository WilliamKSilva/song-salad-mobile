/* eslint-disable react/jsx-props-no-spreading */
import React, { TextInputProps } from 'react-native';
import { Container, SearchIcon, TextInput, WrapperSearchIcon } from './styles';

type Props = TextInputProps;

export function InputSearch({ ...rest }: Props) {
  return (
    <Container>
      <TextInput {...rest} />
      <WrapperSearchIcon>
        <SearchIcon name="search" size={22} />
      </WrapperSearchIcon>
    </Container>
  );
}
