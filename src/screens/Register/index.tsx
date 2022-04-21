import { useForm } from 'react-hook-form';
import React from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm';
import { PictureSelect } from '../../components/PictureSelect';
import { Wrapper, WrapperButton, WrapperInputs, WrapperPictureSelect } from './styles';
import { useRegister } from './useRegister';

export function Register() {
  const { onRegister, responseMessage } = useRegister();
  const { handleSubmit, control } = useForm();

  return (
    <Wrapper>
      <Header />
      <WrapperPictureSelect>
        <PictureSelect />
      </WrapperPictureSelect>
      <WrapperInputs>
        <InputForm control={control} name="name" placeholder="Nome de exibição" />
        <InputForm control={control} name="email" placeholder="E-mail" />
        <InputForm control={control} name="password" placeholder="Senha" />
      </WrapperInputs>
      <WrapperButton>
        <Button title="Enviar" onPress={handleSubmit(onRegister)} />
      </WrapperButton>
    </Wrapper>
  );
}
