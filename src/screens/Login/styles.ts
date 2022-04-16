import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const WrapperLogo = styled.View`
  width: 60%;
  padding-vertical: 50%;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  margin-left: 10px;
`;
