import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  max-width: 350px;
  align-items: center;
  border-radius: 9px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;
