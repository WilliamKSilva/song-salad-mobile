import styled from 'styled-components/native';

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.black,
}))`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  margin-top: 30px;
`;
