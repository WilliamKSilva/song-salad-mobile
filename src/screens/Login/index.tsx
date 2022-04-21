import { useForm } from 'react-hook-form';
import React, { Image } from 'react-native';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import { TextNavigate } from '../../components/TextNavigate';
import { SocialGoogle, Title, Wrapper, WrapperButton, WrapperLogo } from './styles';

export function Login() {
  const { control } = useForm();

  return (
    <Wrapper>
      <WrapperLogo>
        <Image
          source={require('../../assets/disco-de-vinil.png')}
          style={{ width: 70, height: 70 }}
        />
        <Title>Song Salad</Title>
      </WrapperLogo>
      <InputForm control={control} name="email" placeholder="E-mail" required />
      <InputForm control={control} name="password" placeholder="Senha" required />
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
