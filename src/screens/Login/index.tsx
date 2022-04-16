import React, { Image } from 'react-native';
import { InputForm } from '../../components/InputForm';
import { Title, Wrapper, WrapperLogo } from './styles';

export function Login() {
  return (
    <Wrapper>
      <WrapperLogo>
        <Image
          source={require('../../assets/disco-de-vinil.png')}
          style={{ width: 70, height: 70 }}
        />
        <Title>Song Salad</Title>
      </WrapperLogo>
      <InputForm name="email" placeholder="E-mail" error="O email é obrigatório" required />
    </Wrapper>
  );
}
