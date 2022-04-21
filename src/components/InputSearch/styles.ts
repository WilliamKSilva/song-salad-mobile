import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.black,
}))`
  width: 85%;
  padding: 4px;
`;

export const WrapperSearchIcon = styled.TouchableOpacity``;

export const SearchIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.black};
`;
