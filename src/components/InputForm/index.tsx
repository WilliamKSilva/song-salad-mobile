import React from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Wrapper } from './styles';
import { InputError } from '../InputError';

type Props = {
  placeholder: string;
  required: boolean;
  name: string;
  error: string;
};

export function InputForm({ placeholder, required, name, error }: Props) {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Controller
        control={control}
        rules={{
          required,
        }}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} placeholder={placeholder} />
        )}
        name={name}
      />
      {errors.name && <InputError error={error} />}
    </>
  );
}
