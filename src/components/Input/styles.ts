import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
`;
