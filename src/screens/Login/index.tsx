import React, { Image } from 'react-native';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import { TextNavigate } from '../../components/TextNavigate';
import { SocialGoogle, Title, Wrapper, WrapperButton, WrapperLogo } from './styles';

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
      <InputForm name="password" placeholder="Senha" error="A senha é obrigatória" required />
      <WrapperButton>
        <Button title="Entrar" onPress={() => console.log('teste')} />
      </WrapperButton>
      <TextNavigate message="Não possui uma conta?" routeName="Register" />
      <SocialGoogle>
        <Image
          source={require('../../assets/google-social.png')}
          style={{ width: 230, height: 50 }}
        />
      </SocialGoogle>
    </Wrapper>
  );
}
