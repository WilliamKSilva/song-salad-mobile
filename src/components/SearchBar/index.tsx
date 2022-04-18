import React from 'react-native';
import { InputForm } from '../InputForm';
import { InputSearchForm } from '../InputSearchForm';
import { Container } from './styles';

export function SearchBar() {
  return (
    <Container>
      <InputSearchForm name="search" placeholder="Procurar" required error="Nome inválido" />
    </Container>
  );
}
