import React from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { Container, Header } from './styles';

export function Share() {
  return (
    <Container>
      <Header>
        <SearchBar />
      </Header>
    </Container>
  );
}
