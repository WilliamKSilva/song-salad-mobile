import { useNavigation } from '@react-navigation/core';
import React from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm';
import { PictureSelect } from '../../components/PictureSelect';
import { Wrapper, WrapperButton, WrapperInputs, WrapperPictureSelect } from './styles';

export function Register() {
  const { navigate } = useNavigation();

  return (
    <Wrapper>
      <Header />
      <WrapperPictureSelect>
        <PictureSelect />
      </WrapperPictureSelect>
      <WrapperInputs>
        <InputForm name="name" placeholder="Nome de exibição" error="Erro" required />
        <InputForm name="email" placeholder="E-mail" error="Erro" required />
        <InputForm name="password" placeholder="Senha" error="Erro" required />
        <InputForm name="confirm_password" placeholder="Confirmar Senha" error="Erro" required />
      </WrapperInputs>
      <WrapperButton>
        <Button title="Enviar" onPress={() => navigate('Introduction')} />
      </WrapperButton>
    </Wrapper>
  );
}
