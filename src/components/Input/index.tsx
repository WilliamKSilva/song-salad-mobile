/* eslint-disable react/jsx-props-no-spreading */
import React, { TextInputProps } from 'react-native';
import { TextInput } from './styles';

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <TextInput {...rest} />;
}
