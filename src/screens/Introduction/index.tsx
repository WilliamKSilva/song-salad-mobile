import { useNavigation } from '@react-navigation/core';
import React from 'react-native';
import { Button } from '../../components/Button';
import { TextBox } from '../../components/TextBox';
import { Container, Content, Header, Title, WrapperButton } from './styles';

export function Introduction() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header>
        <Title>Ei, espera ai!</Title>
      </Header>
      <Content>
        <TextBox
          number={1}
          text="No momento, para compartilhar músicas no seu feed, você precisará fazer login com uma conta spotify ou deezer."
        />
        <TextBox
          number={2}
          text="Você conseguirá encontrar seus amigos procurando na barra de pesquisa pelo nome de exibição ou código de identificação."
        />
        <TextBox
          number={3}
          text="Você conseguirá compartilhar suas músicas direto pelo seu App de músicas ou usando nosso método de criação de posts."
        />
      </Content>
      <WrapperButton>
        <Button title="Divirta-se" onPress={() => navigate('Share')} />
      </WrapperButton>
    </Container>
  );
}
