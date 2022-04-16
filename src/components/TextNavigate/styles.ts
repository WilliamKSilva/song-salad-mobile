import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  width: 70%;
  padding: 30px;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  text-decoration: underline;
`;
