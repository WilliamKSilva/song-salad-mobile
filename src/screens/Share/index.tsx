import React from 'react-native';
import { Post } from '../../components/Post';
import { SearchBar } from '../../components/SearchBar';
import { Container, Header, WrapperContent } from './styles';

export function Share() {
  return (
    <Container>
      <Header>
        <SearchBar />
      </Header>
      <WrapperContent>
        <Post
          description="Papo reto album muito daora askldnsuiahduiashduisahudhuiashduiaauisdhuisadhuiauishduiashdauisdhasuihduiashduiauisdhuishduiashduias!"
          songContent={{
            song: 'Ode to Viceroy',
            album: '2',
            albumImage: 'teste.png',
          }}
          userInfo={{
            name: 'William',
            image: 'teste2.png',
          }}
        />
      </WrapperContent>
    </Container>
  );
}
