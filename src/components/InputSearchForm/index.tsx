import React from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { InputError } from '../InputError';
import { InputSearch } from '../InputSearch';

type Props = {
  placeholder: string;
  required: boolean;
  name: string;
  error: string;
};

export function InputSearchForm({ placeholder, required, name, error }: Props) {
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
          <InputSearch onChangeText={onChange} value={value} placeholder={placeholder} />
        )}
        name={name}
      />
      {errors.name && <InputError error={error} />}
    </>
  );
}
