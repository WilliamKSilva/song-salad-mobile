/* eslint-disable react/jsx-props-no-spreading */
import React, { TextInputProps } from 'react-native';
import { Controller, Control } from 'react-hook-form';

import { Input } from '../Input';
import { InputError } from '../InputError';

type Props = TextInputProps & {
  control: Control;
  placeholder: string;

  name: string;
};

export function InputForm({ placeholder, control, name, ...rest }: Props) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input onChangeText={onChange} value={value} placeholder={placeholder} {...rest} />
      )}
      name={name}
    />
  );
}
